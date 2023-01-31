import {Note} from '../../types';
import Moment from 'moment';
import {useDispatch} from 'react-redux';
import {notes} from '../../redux/actions/notes';
export const JournalEntry = ({id, date, title, body, imageUrl}: Note) => {
	const noteDate = Moment(date);
	const dispatch = useDispatch();
	const handleEntryClick = () => {
		dispatch(notes.activeNote(id as string, {date, title, body, imageUrl}));
	};

	return (
		<div className="bg-slate-100 rounded-lg shadow-md p-2">
			<div className="bg-cover bg-center h-40 w-full rounded-t-lg relative">
				<svg
					className="w-7 bg-slate-200 rounded-xl m-2 cursor-pointer hover:scale-110 hover:bg-slate-500"
					onClick={handleEntryClick}
					focusable="false"
					viewBox="0 0 24 24"
					data-testid="EditIcon"
					style={{
						position: 'absolute',
						left: 0,
						top: 0,
					}}>
					<path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
				</svg>
				<img
					src={
						imageUrl
							? imageUrl
							: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png'
					}
					alt="img"
					className="rounded-t-lg w-full h-full object-cover aspect-[4/3]"
				/>
			</div>

			<div className="mt-5">
				<p className="text-lg font-medium text-gray-800">{title}</p>
				<p className="text-sm text-gray-600 mt-2">{body}.</p>
			</div>

			<div className="mt-5 flex items-center justify-between">
				<span className="text-sm text-gray-600">{noteDate.format('dddd')}</span>
				<h4 className="text-lg text-gray-800">{noteDate.format('Do')}</h4>
			</div>
		</div>
	);
};
