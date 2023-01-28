import {NotesState, Action} from '../../types';

const initialState: NotesState = {
	notes: [],
	active: null,
};

export const notesReducer = (state: NotesState = initialState, action: Action) => {
	switch (action.type) {
		default:
			return state;
	}
};
