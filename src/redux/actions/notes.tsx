import {Dispatch} from '../store/store';
import {Action, AppState, Note, Types} from '../../types/index';
import {db} from '../../components/auth/firebase/firebaseConfig';
import {loadNotes} from '../../helpers/loadNotes';
import Swal from 'sweetalert2';

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

const setNotes = (notes: Note[]): Action => {
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

const startSaveNote = (note: Note): any => {
	return async (dispatch: Dispatch, getState: () => AppState) => {
		const {id} = getState().auth;
		if (!note.imageUrl) {
			delete note.imageUrl;
		}
		const noteToFirestore = {...note};
		delete noteToFirestore.id;
		try {
			await db.doc(`${id}/journal/notes/${note.id}`).update(noteToFirestore);
		} catch {
			Swal.fire('Error', 'Error al guardar la nota', 'error');
		}
		dispatch(refreshNote(note.id as string, note));
		Swal.fire('Saved', note.title, 'success');
	};
};

const refreshNote = (id: string, note: Note) => {
	return {
		type: Types.notesUpdated,
		payload: {
			id,
			note,
		},
	};
};

export const notes = {
	startNewNote,
	activeNote,
	setNotes,
	startLoadingNotes,
	startSaveNote,
	refreshNote,
};
