import {Redirect, Route} from 'react-router-dom';
import {RouterProps} from '../types/Types';

export const PublicRoute = ({isAuthenticated, component: Component, ...rest}: RouterProps) => {
	return (
		<Route
			{...rest}
			component={(props: any) =>
				isAuthenticated ? <Redirect to="/" /> : <Component {...props} />
			}
		/>
	);
};
