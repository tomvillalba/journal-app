import {Dispatch} from '../store/store';
import {Action, AppState, Note, Types} from '../../types/index';
import {db} from '../../components/auth/firebase/firebaseConfig';

const startNewNote = (): any => {
	return async (dispatch: Dispatch, getState: () => AppState) => {
		const {id} = getState().auth;

		const newNote: Note = {
			title: '',
			body: '',
			date: new Date().getTime(),
		};

		const document = await db.collection(`${id}/journal/notes`).add(newNote);
		dispatch(activeNote(document.id, newNote));
	};
};

export const activeNote = (id: string, note: Note): Action => {
	return {
		type: Types.notesActive,
		payload: {
			...note,
			id,
		},
	};
};

export const notes = {
	startNewNote,
};
