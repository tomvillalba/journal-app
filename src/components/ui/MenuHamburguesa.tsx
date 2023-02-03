import {useState} from 'react';

interface Props {
	children: React.ReactElement | React.ReactElement[];
}
export const MenuHamburguesa = ({children}: Props) => {
	const [active, setActive] = useState(false);
	const menu = document.querySelector('.menu-hamburguesa');

	const handleActiveMenu = () => {
		if (active === false) {
			menu?.classList.add('animate__fadeInLeft');
			setActive(true);
			setTimeout(() => {
				menu?.classList.remove('animate__fadeInLeft');
			}, 300);
		}
		if (active === true) {
			menu?.classList.add('animate__fadeOutLeft');
			setTimeout(() => {
				setActive(false);
				menu?.classList.remove('animate__fadeOutLeft');
			}, 300);
		}
	};

	return (
		<div>
			<div>
				<button className="navbar-burger flex items-center text-primary dark:text-primary-dark p-1 lg:p-3 hover:rotate-90 transition-all">
					<svg
						onClick={handleActiveMenu}
						className="block h-6 w-6 fill-current"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg">
						<title>Mobile menu</title>
						<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
					</svg>
				</button>
			</div>
			<div
				className={`navbar-menu absolute animate__bounce animate__backInLeft z-50 ${
					!active && 'hidden'
				}`}>
				<div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25 "></div>
				<nav
					className={`menu-hamburguesa fixed top-0 left-0 bottom-0 flex flex-col w-5/6 md:w-1/3 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto animate__animated  animate__faster`}>
					<div className="flex items-center mb-8">
						<a className="mr-auto text-3xl font-bold leading-none">JournalApp</a>
						<button
							onClick={handleActiveMenu}
							className="navbar-close">
							<svg
								className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M6 18L18 6M6 6l12 12"></path>
							</svg>
						</button>
					</div>
					{children}
				</nav>
			</div>
		</div>
	);
};
