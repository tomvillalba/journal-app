import {Navigate} from 'react-router-dom';

export const PublicRoute = ({
	children,
	isAuthenticated,
}: {
	children: JSX.Element;
	isAuthenticated: boolean;
}) => {
	return !isAuthenticated ? (
		children
	) : (
		<Navigate
			to="/"
			replace={true}
		/>
	);
};
