import {NothingSelected} from './NothingSelected';
import {NoteScreen} from '../notes/NoteScreen';
import {useSelector} from 'react-redux';
import {AppState} from '../../types';
import {NotesAppBar} from '../notes/NotesAppBar';

export const CreateJournal = () => {
	const {active} = useSelector((state: AppState) => state.notes);
	const screenWidth = window.screen.width;
	const mobileEditScreen = screenWidth <= 1024 && active;
	return (
		<main
			className={` md:flex md:flex-col w-0 ${
				mobileEditScreen ? 'flex flex-col w-screen' : 'hidden'
			} md:w-[50%] lg:w-[60%] app-right h-full py-5 px-7 `}>
			{active && <NotesAppBar />}
			<section className="md:w-[90%] lg:w-[80%] xl:w-[60%] mt-12 xl:mt-12 mx-auto ">
				{active ? <NoteScreen /> : <NothingSelected />}
			</section>
		</main>
	);
};
