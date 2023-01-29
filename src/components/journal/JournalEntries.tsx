import {JournalEntry} from './JournalEntry';
import {useSelector} from 'react-redux';
import {AppState} from '../../types/index';

export const JournalEntries = () => {
	const {notes} = useSelector((state: AppState) => state.notes);

	return (
		<div className="flex flex-wrap justify-center gap-2 m-2 sm:m-0">
			{notes.map((note, idx) => (
				<JournalEntry
					key={idx}
					{...note}
				/>
			))}
		</div>
	);
};
