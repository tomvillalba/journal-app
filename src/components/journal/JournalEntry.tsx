export const JournalEntry = () => {
	return (
		<div>
			<div className="journal__entry pointer">
				<div
					className="journal__entry-picture"
					style={{
						backgroundImage: "url(https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png)",
						backgroundSize: 'cover',
					}}
				></div>

				<div className="journal__entry-body">
					<p className="journal__entry-title">
						Un nuevo día
					</p>
					<p className="journal__entry-content">
						Lorem, ipsum dolor sit amet consectetur adipisicing.
					</p>
				</div>

				<div className="journal__entry-date-box">
					<span>Monday</span>
					<h4>28</h4>
				</div>



			</div>
		</div>
	);
};
