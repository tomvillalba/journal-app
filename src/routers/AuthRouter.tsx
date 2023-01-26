import {Switch, Route, Redirect} from 'react-router-dom';
import {LoginScreen} from '../components/auth/LoginScreen';
import {RegisterScreen} from '../components/auth/RegisterScreen';

export const AuthRouter = () => {
	return (
		<div className="h-screen w-screen flex items-center justify-center bg-primary">
			<div className="bg-slate-200 rounded-md shadow-md w-[300px]">
				<Switch>
					<Route
						exact
						path="/auth/login"
						component={LoginScreen}
					/>
					<Route
						exact
						path="/auth/register"
						component={RegisterScreen}
					/>
					<Redirect to="/auth/login" />
				</Switch>
			</div>
		</div>
	);
};
