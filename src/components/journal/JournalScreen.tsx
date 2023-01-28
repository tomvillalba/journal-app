import {SideBar} from './SideBar';
import {NothingSelected} from './NothingSelected';
import {NoteScreen} from '../notes/NoteScreen';
import {useSelector} from 'react-redux';
import {AppState} from '../../types';

export const JournalScreen = () => {
	const {active} = useSelector((state: AppState) => state.notes);

	return (
		<div className="flex flex-row ">
			<SideBar />
			<main className="w-4/5 hidden md:flex ">
				{active ? <NoteScreen /> : <NothingSelected />}
				{/* <NothingSelected /> <NoteScreen /> */}
			</main>
		</div>
	);
};
