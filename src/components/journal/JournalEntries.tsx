import {JournalEntry} from './JournalEntry';
import {useSelector} from 'react-redux';
import {AppState} from '../../types/index';

export const JournalEntries = () => {
	const {notes} = useSelector((state: AppState) => state.notes);

	return (
		<div className="flex flex-wrap justify-center gap-x-8 gap-y-2 m-2 sm:m-0 px-1 md:px-0 xl:px-8">
			{notes.map((note, idx) => (
				<JournalEntry
					key={idx}
					{...note}
				/>
			))}
		</div>
	);
};
