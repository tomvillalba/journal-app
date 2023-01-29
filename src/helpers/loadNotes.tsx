import {db} from '../components/auth/firebase/firebaseConfig';
import {NoteActive} from '../types';

export const loadNotes = async (id: string) => {
	const notesSnap = await db.collection(`${id}/journal/notes`).get();
	const notes: NoteActive[] = [];

	notesSnap.forEach((snapHijo) => {
		notes.push({
			id: snapHijo.id,
			...snapHijo.data(),
		} as NoteActive);
	});
	return notes;
};
