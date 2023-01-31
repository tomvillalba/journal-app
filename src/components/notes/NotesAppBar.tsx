import {useDispatch, useSelector} from 'react-redux';
import {AppState, Note} from '../../types';
import {notes} from '../../redux/actions/notes';

export const NotesAppBar = () => {
	const {active} = useSelector((state: AppState) => state.notes);
	const dispatch = useDispatch();
	const handleSave = () => {
		dispatch(notes.startSaveNote(active as Note));
	};
	return (
		<nav className="flex justify-between">
			<button className="text-blue-500 hover:text-blue-600 font-medium">Cerrar</button>
			<div>
				<button className="text-blue-500 hover:text-blue-600 font-medium mr-4">
					Subir Imagen
				</button>
				<button
					onClick={handleSave}
					className="text-blue-500 hover:text-blue-600 font-medium">
					Guardar
				</button>
			</div>
		</nav>
	);
};
