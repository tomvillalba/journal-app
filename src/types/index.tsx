export enum Types {
	login = '[Auth] Login',
	logout = '[Auth] Logout',
	uiSetError = '[UI] Set Error',
	uiRemoveError = '[UI] Remove Error',

	uiStartLoading = '[UI] Start loading',
	uiFinishLoading = '[UI] Finish loading',

	notesRefresh = '[Notes] Refresh notes',
	notesAddNew = '[Notes] New note',
	notesActive = '[Notes] Set active note',
	noteClose = '[Notes] Close Active note',
	notesLoad = '[Notes] Load notes',
	notesUpdated = '[Notes] Updated note',
	notesFileUrl = '[Notes] Updated image url',
	notesDelete = '[Notes] Delete note',
	notesLogoutCleaning = '[Notes] Logout Cleaning',
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
	notes: NotesState;
}

export interface AuthState {
	id: string;
	name: string;
}

export interface UiState {
	error: string | null;
	loading: boolean;
}

export interface NotesState {
	notes: Note[];
	active: Note | null;
}

export interface Note {
	id?: string;
	title: string;
	body?: string;
	date: number;
	imageUrl?: string;
}
