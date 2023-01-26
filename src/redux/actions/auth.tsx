import Swal from 'sweetalert2';
import {firebase, googleAuthProvider} from '../../firebase/firebaseConfig';
import {Dispatch} from 'redux';
import {Types} from '../../types/Types';
import {ui} from './ui';

const startLoginEmailPassword = (email: string, password: string): any => {
	return async (dispatch: Dispatch) => {
		try {
			dispatch(ui.startLoading());
			const {user} = await firebase.auth().signInWithEmailAndPassword(email, password);
			dispatch(login(user?.uid, user?.displayName));
		} catch (error: any) {
			dispatch(ui.setError(error.message));
			Swal.fire('Error', error.message, 'error');
		} finally {
			dispatch(ui.finishLoading());
		}
	};
};

const startRegisterWithEmailPasswordName = (
	email: string,
	password: string,
	name: string
): any => {
	return async (dispatch: Dispatch) => {
		try {
			dispatch(ui.startLoading());
			const {user} = await firebase.auth().createUserWithEmailAndPassword(email, password);
			await user?.updateProfile({displayName: name});
			dispatch(login(user?.uid, user?.displayName));
		} catch (error: any) {
			dispatch(ui.setError(error.message));
			Swal.fire('Error', error.message, 'error');
		} finally {
			dispatch(ui.finishLoading());
		}
	};
};

const startGoogleLogin = (): any => {
	return async (dispatch: Dispatch) => {
		const {user} = await firebase.auth().signInWithPopup(googleAuthProvider);
		dispatch(login(user?.uid, user?.displayName));
	};
};

const startLogout = (): any => {
	return async (dispatch: Dispatch) => {
		await firebase.auth().signOut();
		dispatch(logout());
	};
};

const login = (id: string | undefined, name: string | null | undefined) => {
	return {
		type: Types.login,
		payload: {
			id,
			name,
		},
	};
};

const logout = () => {
	return {
		type: Types.logout,
	};
};

export const auth = {
	login,
	logout,
	startLoginEmailPassword,
	startGoogleLogin,
	startRegisterWithEmailPasswordName,
	startLogout,
};
