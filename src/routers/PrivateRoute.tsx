import {Navigate} from 'react-router-dom';

export const PrivateRoute = ({
	children,
	isAuthenticated,
}: {
	children: JSX.Element;
	isAuthenticated: boolean;
}) => {
	return isAuthenticated ? (
		children
	) : (
		<>
			<Navigate to="/auth/login" />
		</>
	);
};
