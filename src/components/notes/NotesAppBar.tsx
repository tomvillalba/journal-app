export const NotesAppBar = () => {
	return (
		<div className="bg-cyan-900 p-2 flex justify-between items-center">
			<span className="text-white">28 de agosto 2022</span>
			<div className="flex">
				<button className="text-white bg-gray-600 p-2 rounded-md hover:bg-gray-700">
					Picture
				</button>
				<button className="text-white bg-gray-600 p-2 rounded-md hover:bg-gray-700 ml-2">
					Save
				</button>
			</div>
		</div>
	);
};
