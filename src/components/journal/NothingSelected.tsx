export const NothingSelected = () => {
	return (
		<div className="w-full mt-12 p-20 ">
			<div className="text-center text-gray-300 cursor-pointer  ">
				<p className=" text-3xl font-medium hover:text-emerald-500">
					Select something or create an entry!
				</p>
				<i className="far fa-star fa-4x mt-5 hover:scale-110 hover:text-emerald-500"></i>
			</div>
		</div>
	);
};
