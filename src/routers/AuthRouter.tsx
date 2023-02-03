import {LoginScreen} from '../components/auth/LoginScreen';
import {RegisterScreen} from '../components/auth/RegisterScreen';
export const AuthRouter = ({login = true}) => {
	return (
		<div className="h-screen flex items-center justify-center  bg-slate-900">
			<div className="bg-slate-200 rounded-md shadow-md w-[300px]">
				{login ? <LoginScreen /> : <RegisterScreen />}
			</div>
		</div>
	);
};
