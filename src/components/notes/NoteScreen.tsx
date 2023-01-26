import {NotesAppBar} from './NotesAppBar';

export const NoteScreen = () => {
	return (
		<div className="bg-white w-full h-full">
			<NotesAppBar />

			<div className="px-3 py-2">
				<input
					type="text"
					placeholder="Some awesome title"
					className="w-full rounded-lg p-2 my-2 border-blue-500 focus:border-blue-500 outline-none"
					autoComplete="off"
				/>

				<textarea
					placeholder="What happened today"
					className="w-full rounded-lg p-2 my-2 h-32 border-blue-500 focus:border-blue-500 outline-none"></textarea>

				<div className="my-4">
					<img
						src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
						alt="imagen"
						className="rounded-lg"
					/>
				</div>
			</div>
		</div>
	);
};
