import {useDispatch, useSelector} from 'react-redux';
import {AppState, Note} from '../../types';
import {notes} from '../../redux/actions/notes';
import Swal from 'sweetalert2';

export const handlePictureUpload = () => {
	const file = document.querySelector('#fileSelector') as HTMLInputElement;
	file?.click();
};
export const NotesAppBar = () => {
	const {active} = useSelector((state: AppState) => state.notes);
	const dispatch = useDispatch();
	const handleCloseNote = () => dispatch(notes.closeNote());
	const handleSave = () => {
		dispatch(notes.startSaveNote(active as Note));
	};

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		const formatValidate = ['image/png', 'image/jpeg'];
		if (!formatValidate.includes(file?.type as string))
			return Swal.fire('Error', 'Formato de imagen no válido', 'error');
		if (file) {
			dispatch(notes.startUploading(file));
			e.target.value = '';
		}
	};
	return (
		<nav className="flex justify-between animate__animated animate__fadeIn animate__faster">
			<button
				onClick={handleCloseNote}
				className="text-primary dark:text-primary-dark hover:text-blue-600 dark:hover:text-blue-600 font-medium transition-all">
				Cerrar
			</button>
			<input
				id="fileSelector"
				type="file"
				accept="image/png, image/jpeg"
				name="file"
				style={{display: 'none'}}
				onChange={handleFileChange}
			/>
			<div>
				<button
					onClick={handlePictureUpload}
					className="text-primary dark:text-blue-500 hover:text-blue-600 dark:hover:text-blue-600 font-medium mr-4 transition-all">
					Subir Imagen
				</button>
				<button
					onClick={handleSave}
					className="text-primary dark:text-blue-500 hover:text-blue-600 dark:hover:text-blue-600 font-medium transition-all">
					Guardar
				</button>
			</div>
		</nav>
	);
};
