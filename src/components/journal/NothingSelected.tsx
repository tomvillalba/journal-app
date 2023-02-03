import {useDispatch} from 'react-redux';
import {notes} from '../../redux/actions/notes';
export const NothingSelected = () => {
	const dispatch = useDispatch();

	const handleAddNew = () => {
		dispatch(notes.startNewNote());
	};
	return (
		<div
			onClick={handleAddNew}
			className="text-center text-primary dark:text-primary-dark mt-12 cursor-pointer hover:text-secondary transition-all hover:scale-105">
			<p className="text-3xl font-medium ">Select something or create an entry!</p>
			<i className="far fa-star fa-4x mt-5 "></i>
		</div>
	);
};
