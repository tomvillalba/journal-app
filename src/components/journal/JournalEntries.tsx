import {JournalEntry} from './JournalEntry';

export const JournalEntries = () => {
	const entries = [1, 2, 3, 4, 5];

	return (
		<div className="flex flex-wrap justify-center gap-2 m-2 sm:m-0">
			{entries.map((entry, idx) => (
				<JournalEntry key={idx} />
			))}
		</div>
	);
};
