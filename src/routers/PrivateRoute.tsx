import {Redirect, Route} from 'react-router-dom';
import {RouterProps} from '../types';

export const PrivateRoute = ({
	isAuthenticated,
	component: Component,
	...rest
}: RouterProps) => {
	return (
		<Route
			{...rest}
			component={(props: RouterProps) =>
				isAuthenticated ? <Component {...props} /> : <Redirect to="/auth/login" />
			}
		/>
	);
};
