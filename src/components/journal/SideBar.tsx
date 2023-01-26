import {JournalEntries} from './JournalEntries';
import {useDispatch} from 'react-redux';
import {auth} from '../../redux/actions/auth';

export const SideBar = () => {
	const dispatch = useDispatch();

	const handleLogout = () => {
		dispatch(auth.startLogout());
	};

	return (
		<aside className="journal__sidebar">
			<div className="journal__sidebar-navbar">
				<h3 className="mt-5">
					<i className="far fa-moon"></i>
					<span> Tomás</span>
				</h3>

				<button
					onClick={handleLogout}
					className="btn">
					Logout
				</button>
			</div>
			<div className="journal__new-entry">
				<i className="far fa-calendar-plus fa-5x"></i>
				<p className="mt-5">New entry</p>
			</div>
			<JournalEntries />
		</aside>
	);
};
