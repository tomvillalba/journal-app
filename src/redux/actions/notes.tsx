import {Dispatch} from '../store/store';
import {Action, AppState, Note, NoteActive, Types} from '../../types/index';
import {db} from '../../components/auth/firebase/firebaseConfig';
import {loadNotes} from '../../helpers/loadNotes';

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
const activeNote = (id: string, note: Note): Action => {
	return {
		type: Types.notesActive,
		payload: {
			...note,
			id,
		},
	};
};

const setNotes = (notes: NoteActive[]): Action => {
	return {
		type: Types.notesLoad,
		payload: notes,
	};
};

const startLoadingNotes = (id: string): any => {
	return async (dispatch: Dispatch) => {
		const notesData = await loadNotes(id);
		dispatch(notes.setNotes(notesData));
	};
};

export const notes = {
	startNewNote,
	activeNote,
	setNotes,
	startLoadingNotes,
};
