export enum Types {
	login = '[Auth] Login',
	logout = '[Auth] Logout',
}

export interface User {
	email: string;
	password: string;
}
