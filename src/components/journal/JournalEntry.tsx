import {NoteActive} from '../../types';
import Moment from 'moment';

export const JournalEntry = ({id, date, title, body, imageUrl}: NoteActive) => {
	const noteDate = Moment(date);
	return (
		<div className="bg-slate-100 rounded-lg shadow-md p-2">
			<div className="bg-cover bg-center h-40 w-full rounded-t-lg">
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
