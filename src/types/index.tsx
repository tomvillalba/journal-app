export enum Types {
	login = '[Auth] Login',
	logout = '[Auth] Logout',
	uiSetError = '[UI] Set Error',
	uiRemoveError = '[UI] Remove Error',
	uiStartLoading = '[UI] Start loading',
	uiFinishLoading = '[UI] Finish loading',
}
export interface Action {
	type: Types;
	payload?: any;
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

export interface RouterProps {
	isAuthenticated: boolean;
	component: any;
	exact?: boolean;
	path: string;
}

export interface AppState {
	auth: AuthState;
	ui: UiState;
}

export interface AuthState {
	id: string;
	name: string;
}

export interface UiState {
	error: string | null;
	loading: boolean;
}
