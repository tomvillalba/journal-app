import {Note} from '../../types';
import Moment from 'moment';
import {useDispatch} from 'react-redux';
import {notes} from '../../redux/actions/notes';
import '../../styles/card.css';

export const JournalEntry = ({id, date, title, body, imageUrl}: Note) => {
	const noteDate = Moment(date);
	const dispatch = useDispatch();
	const handleEntryClick = () => {
		dispatch(notes.activeNote(id as string, {date, title, body, imageUrl}));
	};
	return (
		<div
			onClick={handleEntryClick}
			className="card h-auto animate__animated animate__fadeIn animate__faster">
			<div className={`img-section bg-[#56C4E5] ${imageUrl && 'bg-white'}`}>
				{imageUrl ? (
					<img
						src={imageUrl}
						className="w-full object-cover aspect-[16/9] object-top rounded-[20px]"
					/>
				) : (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						height="77"
						width="76">
						<path
							fillRule="nonzero"
							fill="#3F9CBB"
							d="m60.91 71.846 12.314-19.892c3.317-5.36 3.78-13.818-2.31-19.908l-26.36-26.36c-4.457-4.457-12.586-6.843-19.908-2.31L4.753 15.69c-5.4 3.343-6.275 10.854-1.779 15.35a7.773 7.773 0 0 0 7.346 2.035l7.783-1.945a3.947 3.947 0 0 1 3.731 1.033l22.602 22.602c.97.97 1.367 2.4 1.033 3.732l-1.945 7.782a7.775 7.775 0 0 0 2.037 7.349c4.49 4.49 12.003 3.624 15.349-1.782Zm-24.227-46.12-1.891-1.892-1.892 1.892a2.342 2.342 0 0 1-3.312-3.312l1.892-1.892-1.892-1.891a2.342 2.342 0 0 1 3.312-3.312l1.892 1.891 1.891-1.891a2.342 2.342 0 0 1 3.312 3.312l-1.891 1.891 1.891 1.892a2.342 2.342 0 0 1-3.312 3.312Zm14.19 14.19a2.343 2.343 0 1 1 3.315-3.312 2.343 2.343 0 0 1-3.314 3.312Zm0 7.096a2.343 2.343 0 0 1 3.313-3.312 2.343 2.343 0 0 1-3.312 3.312Zm7.096-7.095a2.343 2.343 0 1 1 3.312 0 2.343 2.343 0 0 1-3.312 0Zm0 7.095a2.343 2.343 0 0 1 3.312-3.312 2.343 2.343 0 0 1-3.312 3.312Z"></path>
					</svg>
				)}
			</div>
			<div className="card-desc bg-card-primary">
				<div className="card-header">
					<div className="card-title">{title}</div>
					<div className="card-menu">
						<div className="dot bg-card-secondary"></div>
						<div className="dot bg-card-secondary"></div>
						<div className="dot bg-card-secondary"></div>
					</div>
				</div>
				<div className="card-body">{body}</div>
				<p className="recent">
					{noteDate.format('dddd')} {noteDate.format('Do')}
				</p>
			</div>
		</div>
	);
};
