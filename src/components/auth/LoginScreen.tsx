import validator from 'validator';
import Swal from 'sweetalert2';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {auth} from '../../redux/actions/auth';
import {useForm} from '../../hooks/useForm';
import {AppState, User} from '../../types';
import '../../styles/googleButton.css';

const initialState: User = {
	email: '',
	password: '',
};

export const LoginScreen = () => {
	const dispatch = useDispatch();
	const {loading} = useSelector((state: AppState) => state.ui);
	const {formValues, handleInputChange} = useForm(initialState);
	const {email, password} = formValues;

	const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!email && !password)
			return Swal.fire('Error', 'Email and Password are required', 'error');
		if (!validator.isEmail(email))
			return Swal.fire('Error', 'Enter a valid email format', 'error');
		if (!password) return Swal.fire('Error', 'Password are required', 'error');
		dispatch(auth.startLoginEmailPassword(email, password));
	};
	const handleGoogleLogin = () => {
		dispatch(auth.startGoogleLogin());
	};

	return (
		<>
			<form
				onSubmit={handleLogin}
				className="p-5">
				<h3 className="text-slate-600 text-xl font-medium mb-2 text-center pt-1">
					Inicio de sesión
				</h3>
				<div>
					<label
						className="text-slate-500 font-medium"
						htmlFor="email">
						Email
					</label>
					<input
						type="text"
						placeholder="tom@example.com"
						name="email"
						autoComplete="off"
						className="block w-full rounded-md border-2 border-gray-300 p-2 mb-2 focus:outline-none focus:border-indigo-400 hover:border-indigo-300"
						value={email}
						onChange={handleInputChange}
					/>
				</div>
				<div>
					<label
						className="text-slate-500 font-medium "
						htmlFor="password">
						Password
					</label>
					<input
						type="password"
						placeholder="*******"
						name="password"
						className="block w-full rounded-md border-2 border-gray-300 p-2 mb-2 focus:outline-none focus:border-indigo-400 hover:border-indigo-300"
						value={password}
						onChange={handleInputChange}
					/>
				</div>

				<button
					type="submit"
					className="transition ease-in-out delay-150 bg-indigo-500 hover:scale-105 hover:bg-sky-700 duration-300 font-medium text-white py-2 px-4 rounded-lg w-full"
					disabled={loading}>
					Ingresar
				</button>

				<div className="my-2">
					<p className="text-center text-gray-500">Login with social networks</p>
					<div
						className="google-btn transition ease-in-out delay-150 duration-300 hover:scale-105"
						onClick={handleGoogleLogin}>
						<div className="google-icon-wrapper">
							<img
								className="google-icon"
								src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
								alt="google button"
							/>
						</div>
						<p className="btn-text">
							<b>Sign in with google</b>
						</p>
					</div>
				</div>

				<Link
					to="/auth/register"
					className="text-blue-500 hover:text-blue-700 font-medium">
					Create new Account
				</Link>
			</form>
		</>
	);
};
