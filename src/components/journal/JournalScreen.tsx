import {SideBar} from './SideBar';
import {NothingSelected} from './NothingSelected';
import {NoteScreen} from '../notes/NoteScreen';

export const JournalScreen = () => {
	return (
		<div className="flex flex-row">
			<SideBar />
			<main className="w-4/5 hidden md:flex">
				{/* <NothingSelected /> */} <NoteScreen />
			</main>
		</div>
	);
};
