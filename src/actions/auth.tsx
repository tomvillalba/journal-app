import {Types} from '../types/Types';

const login = (id: string, name: string) => {
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
};
