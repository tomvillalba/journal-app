import {CreateJournal} from './CreateJournal';
import {SideBar} from './SideBar';

export const JournalScreen = () => {
	return (
		<div className="flex h-full bg-[#e7e7e7] dark:bg-[#171717] text-slate-700 dark:text-white">
			<SideBar />
			<CreateJournal />
		</div>
	);
};
