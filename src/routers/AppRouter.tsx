import {BrowserRouter as Router, Switch, Redirect} from 'react-router-dom';
import {AuthRouter} from './AuthRouter';
import {JournalScreen} from '../components/journal/JournalScreen';
import {useEffect, useState} from 'react';
import firebase from 'firebase/app';
import {useDispatch} from 'react-redux';
import {auth} from '../redux/actions/auth';
import {PrivateRoute} from './PrivateRoute';
import {PublicRoute} from './PublicRoute';

export const AppRouter = () => {
	const dispatch = useDispatch();
	const [checking, setChecking] = useState(true);
	const [logged, setLogged] = useState(false);

	useEffect(() => {
		firebase.auth().onAuthStateChanged((user) => {
			if (user?.uid) {
				dispatch(auth.login(user.uid, user.displayName));
				setLogged(true);
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
		<Router>
			<div className="mx-auto">
				<Switch>
					<PublicRoute
						path="/auth"
						isAuthenticated={logged}
						component={AuthRouter}
					/>

					<PrivateRoute
						isAuthenticated={logged}
						component={JournalScreen}
						path="/"
						exact
					/>

					<Redirect to={'/auth/login'} />
				</Switch>
			</div>
		</Router>
	);
};
