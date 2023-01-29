import {SideBar} from './SideBar';
import {NothingSelected} from './NothingSelected';
import {NoteScreen} from '../notes/NoteScreen';
import {useSelector} from 'react-redux';
import {AppState} from '../../types';

export const JournalScreen = () => {
	const {active} = useSelector((state: AppState) => state.notes);

	return (
		<div className="flex">
			<SideBar />
			<main className="hidden md:flex md:flex-col relative">
				<div className="rounded shadow-lg py-5 px-7 fixed min-h-screen w-0 md:w-[50%] lg:w-[60%]">
					<nav className="flex justify-between ">
						<button className="text-blue-500 hover:text-blue-600 font-medium">Crear</button>
						<button className="text-blue-500 hover:text-blue-600 font-medium">Crear</button>
					</nav>
					<section className="md:w-[90%] lg:w-[80%] xl:w-[60%] mt-12 xl:mt-12  mx-auto">
						{active ? <NoteScreen /> : <NothingSelected />}
					</section>
				</div>
			</main>
		</div>
	);
};
