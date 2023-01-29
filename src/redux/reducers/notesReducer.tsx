import {NotesState, Action, Types, NoteActive} from '../../types';

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
				} as NoteActive,
			};
		case Types.notesLoad:
			return {
				...state,
				notes: [...action.payload],
			};

		default:
			return state;
	}
};
