import {Routes, Route, BrowserRouter, Navigate} from 'react-router-dom';
import {AuthRouter} from './AuthRouter';
import {useEffect, useState} from 'react';
import firebase from 'firebase/app';
import {useDispatch} from 'react-redux';
import {PrivateRoute} from './PrivateRoute';
import {PublicRoute} from './PublicRoute';
import {auth} from '../redux/actions/auth';
import {notes} from '../redux/actions/notes';
import {JournalScreen} from '../components/journal/JournalScreen';

export const AppRouter = () => {
	const dispatch = useDispatch();
	const [checking, setChecking] = useState(true);
	const [logged, setLogged] = useState(false);
	useEffect(() => {
		firebase.auth().onAuthStateChanged(async (user) => {
			if (user?.uid) {
				dispatch(auth.login(user.uid, user.displayName));
				setLogged(true);
				dispatch(notes.startLoadingNotes(user.uid));
			} else {
				setLogged(false);
			}
			setChecking(false);
		});
	}, []);

	if (checking) {
		return <h1>Wait...</h1>;
	}
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/auth/login"
					element={
						<PublicRoute isAuthenticated={logged}>
							<AuthRouter />
						</PublicRoute>
					}
				/>
				<Route
					path="/auth/register"
					element={
						<PublicRoute isAuthenticated={logged}>
							<AuthRouter login={false} />
						</PublicRoute>
					}
				/>

				<Route
					path={'/'}
					element={
						<PrivateRoute isAuthenticated={logged}>
							<JournalScreen />
						</PrivateRoute>
					}
				/>
				<Route
					path="*"
					element={<Navigate to="/" />}
				/>
			</Routes>
		</BrowserRouter>
	);
};
