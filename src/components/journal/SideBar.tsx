import {JournalEntries} from './JournalEntries';
import {useDispatch} from 'react-redux';
import {auth} from '../../redux/actions/auth';

export const SideBar = () => {
	const dispatch = useDispatch();

	const handleLogout = () => {
		dispatch(auth.startLogout());
	};

	return (
		<aside className="h-full w-full md:w-1/5 bg-gray-800 px-2">
			<div className="flex justify-between items-center p-5 md:px-2 lg:px-5">
				<h3 className="text-lg font-medium text-white">
					<i className="far fa-moon text-gray-300"></i>
					<span className="ml-2 md:ml-0 lg:ml-2">Tomás</span>
				</h3>

				<button
					onClick={handleLogout}
					className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600">
					Logout
				</button>
			</div>
			<div className="flex flex-col items-center justify-center p-5 text-center hover:bg-gray-700 cursor-pointer">
				<i className="far fa-calendar-plus fa-5x text-white"></i>
				<p className="mt-5 text-lg font-medium text-white">New entry</p>
			</div>
			<JournalEntries />
		</aside>
	);
};
