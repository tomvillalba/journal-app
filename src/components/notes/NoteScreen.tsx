export const NoteScreen = () => {
	return (
		<>
			<h2 className="font-bold text-3xl text-white text-center mb-5">Crea una tarea</h2>
			<input
				type="text"
				placeholder="Some awesome title"
				className="w-full rounded-lg p-2 mt-2 border-blue-500 focus:border-blue-500 outline-none"
				autoComplete="off"
			/>

			<textarea
				placeholder="What happened today"
				className="w-full rounded-lg p-2 mt-2 h-32 border-blue-500 focus:border-blue-500 outline-none"></textarea>

			<img
				src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
				alt="imagen"
				className="rounded-lg mx-auto w-full mt-4 mb-2"
			/>
			<div className="flex flex-row justify-between px-4">
				<button className="bg-blue-500 w-1/3 text-white py-2 px-4 rounded-md hover:bg-blue-600">
					Subir imagen
				</button>
				<button className="bg-blue-500 text-white w-1/3 py-2 px-4 rounded-md hover:bg-blue-600">
					Guardar
				</button>
			</div>
		</>
	);
};
