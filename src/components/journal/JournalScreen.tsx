import {CreateJournal} from './CreateJournal';
import {SideBar} from './SideBar';

export const JournalScreen = () => {
	return (
		<div className="flex h-full">
			<SideBar />
			<CreateJournal />
		</div>
	);
};
