import {JournalEntries} from './JournalEntries';
import {useDispatch, useSelector} from 'react-redux';
import {auth} from '../../redux/actions/auth';
import {AppState} from '../../types';
import {notes} from '../../redux/actions/notes';
import {MenuHamburguesa} from '../ui/MenuHamburguesa';
import {useState} from 'react';

export const SideBar = () => {
	const dispatch = useDispatch();
	const {name} = useSelector((state: AppState) => state.auth);
	const {active} = useSelector((state: AppState) => state.notes);
	const [dark, setDark] = useState(false);
	const handleLogout = () => {
		dispatch(auth.startLogout());
	};

	const handleAddNew = () => {
		dispatch(notes.startNewNote());
	};

	const handleTheme = () => {
		const theme = document.documentElement.classList;
		theme.toggle('dark');
		setDark(!dark);
	};
	const screenWidth = window.screen.width;

	return (
		<aside
			className={`w-full min-h-screen h-auto md:w-[50vw] xl:w-[40vw]  px-2 pb-20 app-left ${
				(!active && screenWidth <= 763) || screenWidth >= 768 ? 'block' : 'hidden'
			} text-[#171717] dark:text-white`}>
			<div className="flex justify-between items-center p-5 md:px-2 lg:px-5 ">
				<MenuHamburguesa>
					<ul>
						<li className="mb-1 ">
							<a
								className="block p-4 text-xl font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded transition-all"
								href="#">
								Home
							</a>
						</li>
						<li className="mb-1">
							<a
								className="block p-4 text-xl font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded transition-all"
								href="#">
								Home
							</a>
						</li>
						<li className="mb-1">
							<a
								className="block p-4 text-xl font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded transition-all"
								href="#">
								Home
							</a>
						</li>
						<li className="mb-1">
							<a
								className="block p-4 text-xl font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded transition-all"
								href="#">
								Home
							</a>
						</li>
						<li className="mb-1">
							<a
								className="block p-4 text-xl font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded transition-all"
								href="#">
								Home
							</a>
						</li>
					</ul>
					<button
						onClick={handleLogout}
						className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 absolute bottom-5 transition-all">
						Logout
					</button>
				</MenuHamburguesa>
				<h3 className="text-lg font-medium ">
					<i
						onClick={handleTheme}
						className={`far ${dark ? 'fa-moon' : 'fa-sun'} transition-all`}></i>
					<span className="ml-2">{name?.split(' ', 1)}</span>
				</h3>
			</div>

			<div
				onClick={handleAddNew}
				className="p-5 text-center">
				<div className="cursor-pointer text-primary dark:text-white hover:scale-105 hover:text-secondary dark:hover:text-primary-dark transition-all">
					<i className=" far fa-calendar-plus fa-5x"></i>
					<p className="mt-5 text-lg font-medium">New entry</p>
				</div>
			</div>

			<JournalEntries />
		</aside>
	);
};
