import {NotesState, Action, Types, Note} from '../../types';

const initialState: NotesState = {
	notes: [],
	active: null,
};

export const notesReducer = (state: NotesState = initialState, action: Action) => {
	switch (action.type) {
		case Types.notesActive:
			return {
				...state,
				active: {
					...action.payload,
				} as Note,
			};
		case Types.notesAddNew:
			return {
				...state,
				notes: [action.payload, ...state.notes],
			};
		case Types.noteClose:
			return {
				...state,
				active: null,
			};
		case Types.notesLoad:
			return {
				...state,
				notes: [...action.payload],
			};
		case Types.notesUpdated:
			return {
				...state,
				notes: state.notes.map((note) =>
					note.id === action.payload.id ? action.payload.note : note
				),
			};
		case Types.notesDelete:
			return {
				...state,
				active: null,
				notes: state.notes.filter((note) => note.id !== action.payload),
			};
		case Types.notesLogoutCleaning:
			return {
				...state,
				active: null,
				notes: [],
			};
		default:
			return state;
	}
};
