import {useSelector, useDispatch} from 'react-redux';
import {AppState, Note} from '../../types';
import {useForm} from '../../hooks/useForm';
import {useEffect, useRef} from 'react';
import {notes} from '../../redux/actions/notes';

export const NoteScreen = ({edit = false}) => {
	const dispatch = useDispatch();
	const note = useSelector((state: AppState) => state.notes.active as Note);
	const {formValues, handleInputChange, reset} = useForm<Note>(note);
	const {body, title, imageUrl} = formValues;
	const activeId = useRef(note?.id);

	useEffect(() => {
		if (note?.id !== activeId.current) {
			reset(note);
			activeId.current = note?.id;
		}
	}, [note, reset]);

	useEffect(() => {
		dispatch(notes.activeNote(formValues.id as string, {...formValues}));
	}, [formValues]);

	const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		dispatch(notes.startSaveNote(note));
	};

	return (
		<form onSubmit={handleSave}>
			<h2 className="font-bold text-3xl text-white text-center mb-5">
				{edit ? 'Editar una tarea' : 'Crear una tarea'}
			</h2>
			<input
				type="text"
				placeholder="Some awesome title"
				className="w-full rounded-lg p-2 mt-2 border-blue-500 focus:border-blue-500 outline-none"
				autoComplete="off"
				value={title}
				name="title"
				onChange={handleInputChange}
			/>

			<textarea
				placeholder="What happened today"
				className="w-full rounded-lg p-2 mt-2 h-32 border-blue-500 focus:border-blue-500 outline-none"
				value={body}
				name="body"
				onChange={handleInputChange}></textarea>
			<img
				src={
					imageUrl
						? imageUrl
						: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
				}
				alt="imagen"
				className="rounded-lg mx-auto h-[40vh] mt-4 mb-2 object-contain aspect-[4/3] bg-white"
			/>
		</form>
	);
};
