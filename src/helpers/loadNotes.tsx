import {db} from '../components/auth/firebase/firebaseConfig';
import {Note} from '../types';

export const loadNotes = async (id: string) => {
	const notesSnap = await db.collection(`${id}/journal/notes`).get();
	const notes: Note[] = [];

	notesSnap.forEach((snapHijo) => {
		notes.push({
			id: snapHijo.id,
			...snapHijo.data(),
		} as Note);
	});
	return notes;
};
