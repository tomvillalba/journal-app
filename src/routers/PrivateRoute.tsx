import {Redirect, Route} from 'react-router-dom';
import {RouterProps} from '../types/Types';

export const PrivateRoute = ({
	isAuthenticated,
	component: Component,
	...rest
}: RouterProps) => {
	return (
		<Route
			{...rest}
			component={(props: any) =>
				isAuthenticated ? <Component {...props} /> : <Redirect to="/auth/login" />
			}
		/>
	);
};
