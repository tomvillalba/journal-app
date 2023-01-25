import {Types} from '../types/Types';
import {AnyAction, Dispatch} from 'redux';
import {firebase, googleAuthProvider} from '../firebase/firebaseConfig';

const startLoginEmailPassword = (email: string, password: string) => {
	return (dispatch: Dispatch<AnyAction>) => {
		setTimeout(() => {
			dispatch(login('123', 'Tomas'));
		}, 3500);
	};
};

const startGoogleLogin = () => {
	return (dispatch: any) => {
		firebase
			.auth()
			.signInWithPopup(googleAuthProvider)
			.then(({user}) => {
				dispatch(login(user?.uid, user?.displayName));
			});
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
};
