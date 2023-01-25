import {Types} from '../../types/Types';
import {Dispatch} from 'redux';
import {firebase, googleAuthProvider} from '../../firebase/firebaseConfig';

const startLoginEmailPassword = (email: string, password: string): any => {
	return (dispatch: Dispatch) => {
		setTimeout(() => {
			dispatch(login('123', 'Tomas'));
		}, 3500);
	};
};

const startGoogleLogin = (): any => {
	return (dispatch: Dispatch) => {
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
