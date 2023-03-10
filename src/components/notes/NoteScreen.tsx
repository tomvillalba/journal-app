import {useSelector, useDispatch} from 'react-redux';
import {AppState, Note} from '../../types';
import {useForm} from '../../hooks/useForm';
import {useEffect, useRef} from 'react';
import {notes} from '../../redux/actions/notes';
import {handlePictureUpload} from './NotesAppBar';

export const NoteScreen = ({edit = false}) => {
	const dispatch = useDispatch();
	const note = useSelector((state: AppState) => state.notes.active as Note);
	const {formValues, handleInputChange, reset} = useForm<Note>(note);
	const {body, title, imageUrl} = formValues;
	const activeId = useRef(note?.id);
	const activeImg = useRef(note?.imageUrl);
	const mobileEditScreen = window.screen.width < 1024 && note;

	useEffect(() => {
		if (note?.id !== activeId.current) {
			reset(note);
			activeId.current = note?.id;
		}
		if (note?.imageUrl !== activeImg.current) {
			reset(note);
			activeImg.current = note?.imageUrl;
		}
	}, [note, reset]);

	useEffect(() => {
		dispatch(notes.activeNote(formValues.id as string, {...formValues}));
	}, [formValues]);

	const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		dispatch(notes.startSaveNote(note));
	};

	const handleDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.stopPropagation();
		dispatch(notes.startDeleting(note.id as string));
	};

	return (
		<form
			onSubmit={handleSave}
			className="animate__animated animate__fadeIn animate__faster">
			<h2 className="font-bold text-3xl  text-center mb-5">
				{edit ? 'Editar una tarea' : 'Crear una tarea'}
			</h2>
			<input
				type="text"
				placeholder="Some awesome title"
				className={
					'w-full p-2 mt-2 bg-transparent border-b-2 bg-red-500 border-slate-700 transition-all duration-500 focus:border-secondary hover:border-secondary dark:focus:border-primary dark:hover:border-primary outline-none'
				}
				autoComplete="off"
				value={title}
				name="title"
				onChange={handleInputChange}
			/>
			<textarea
				placeholder="What happened today"
				className="w-full p-2 mt-2 h-32 bg-transparent border-b-2 border-slate-700 transition-all duration-500 focus:border-secondary hover:border-secondary dark:focus:border-primary dark:hover:border-primary outline-none"
				value={body}
				name="body"
				onChange={handleInputChange}></textarea>

			<div
				onClick={handlePictureUpload}
				className={`rounded-lg mx-auto h-[40vh]  border-2 border-slate-700 cursor-pointer mt-4 mb-2 bg-transparent grid place-content-center overflow-hidden ${
					mobileEditScreen && ' w-full'
				} hover:border-primary transition-all duration-500`}>
				{imageUrl ? (
					<img
						src={imageUrl}
						alt="imagen"
						className="rounded-lg mx-auto object-contain h-[40vh] aspect-[16/9]  cursor-pointer"
					/>
				) : (
					<p className="text-xl font-bold text-slate-500">??Prueba a subir una foto!</p>
				)}
				{imageUrl && (
					<button
						onClick={handleDelete}
						className="bg-slate-800 hover:bg-red-800 transition-all duration-300 text-white rounded-lg px-2 py-1 md:py-0 absolute m-1 self-end z-10 ">
						Delete image
					</button>
				)}
			</div>
		</form>
	);
};
