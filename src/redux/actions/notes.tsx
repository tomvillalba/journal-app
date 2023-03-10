import {Dispatch} from '../store/store';
import {Action, AppState, Note, Types} from '../../types/index';
import {db} from '../../components/auth/firebase/firebaseConfig';
import {loadNotes} from '../../helpers/loadNotes';
import Swal from 'sweetalert2';
import {fileUpload} from '../../helpers/fileUpload';

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
		dispatch(addNewNote(document.id, newNote));
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

export const addNewNote = (id: string, note: Note): Action => {
	return {
		type: Types.notesAddNew,
		payload: {
			id,
			...note,
		},
	};
};

const closeNote = () => {
	return {
		type: Types.noteClose,
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
		if (!note?.imageUrl) {
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

const refreshNotes = () => {
	return {
		type: Types.notesRefresh,
	};
};

const startUploading = (file: File): any => {
	return async (dispatch: Dispatch, getState: () => AppState) => {
		const active = getState().notes.active as Note;
		Swal.fire({
			title: 'Uploading...',
			text: 'Please wait...',
			allowOutsideClick: false,
			didOpen: () => {
				Swal.showLoading();
			},
		});
		const fileUrl = await fileUpload(file);
		active.imageUrl = fileUrl;
		dispatch(notes.startSaveNote(active));
		dispatch(notes.activeNote(active.id as string, active));
		Swal.close();
	};
};

const startDeleting = (id: string): any => {
	return async (dispatch: Dispatch, getState: () => AppState) => {
		const uid = getState().auth.id;
		await db.doc(`${uid}/journal/notes/${id}`).delete();
		dispatch(deleteNote(id));
	};
};

const deleteNote = (id: string) => {
	return {
		type: Types.notesDelete,
		payload: id,
	};
};

const notesLogout = () => {
	return {
		type: Types.notesLogoutCleaning,
	};
};

export const notes = {
	startNewNote,
	activeNote,
	closeNote,
	setNotes,
	startLoadingNotes,
	startSaveNote,
	refreshNote,
	refreshNotes,
	startUploading,
	startDeleting,
	deleteNote,
	notesLogout,
};
