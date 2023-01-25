export enum Types {
	login = '[Auth] Login',
	logout = '[Auth] Logout',
	uiSetError = '[UI] Set Error',
	uiRemoveError = '[UI] Remove Error',
}

export interface User {
	email: string;
	password: string;
}
export interface UserRegister {
	name: string;
	email: string;
	password: string;
	password2: string;
}
