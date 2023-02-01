import {JournalEntries} from './JournalEntries';
import {useDispatch, useSelector} from 'react-redux';
import {auth} from '../../redux/actions/auth';
import {AppState} from '../../types';
import {notes} from '../../redux/actions/notes';

export const SideBar = () => {
	const dispatch = useDispatch();
	const {name} = useSelector((state: AppState) => state.auth);
	const {active} = useSelector((state: AppState) => state.notes);

	const handleLogout = () => {
		dispatch(auth.startLogout());
	};

	const handleAddNew = () => {
		dispatch(notes.startNewNote());
	};
	const screenWidth = window.screen.width;

	return (
		<aside
			className={`w-full min-h-screen h-auto md:w-[50vw] xl:w-[40vw] bg-gray-800 px-2 pb-20 app-left ${
				(!active && screenWidth <= 763) || screenWidth >= 768 ? 'block' : 'hidden'
			}`}>
			<div className="flex justify-between items-center p-5 md:px-2 lg:px-5">
				<h3 className="text-lg font-medium text-white">
					<i className="far fa-moon text-gray-300"></i>
					<span className="ml-1 md:ml-2 ">{name?.split(' ', 1)}</span>
				</h3>

				<button
					onClick={handleLogout}
					className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600">
					Logout
				</button>
			</div>

			<div
				onClick={handleAddNew}
				className="p-5 text-center">
				<div className="cursor-pointer text-white hover:scale-105 hover:text-emerald-600">
					<i className="far fa-calendar-plus fa-5x"></i>
					<p className="mt-5 text-lg font-medium">New entry</p>
				</div>
			</div>

			<JournalEntries />
		</aside>
	);
};
