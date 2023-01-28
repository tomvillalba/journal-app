import {Redirect, Route} from 'react-router-dom';
import {RouterProps} from '../types';

export const PublicRoute = ({isAuthenticated, component: Component, ...rest}: RouterProps) => {
	return (
		<Route
			{...rest}
			component={(props: RouterProps) =>
				isAuthenticated ? <Redirect to="/" /> : <Component {...props} />
			}
		/>
	);
};
