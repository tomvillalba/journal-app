export const JournalEntry = () => {
	return (
		<div className="bg-slate-100 rounded-lg shadow-md p-2">
			<div
				className="bg-cover bg-center h-40 w-72 lg:w-full rounded-t-lg"
				style={{
					backgroundImage:
						'url(https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png)',
				}}></div>
			<div className="mt-5">
				<p className="text-lg font-medium text-gray-800">Un nuevo día</p>
				<p className="text-sm text-gray-600 mt-2">
					Lorem, ipsum dolor sit amet consectetur adipisicing.
				</p>
			</div>

			<div className="mt-5 flex items-center justify-between">
				<span className="text-sm text-gray-600">Monday</span>
				<h4 className="text-lg text-gray-800">28</h4>
			</div>
		</div>
	);
};
