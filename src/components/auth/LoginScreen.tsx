import validator from 'validator';
import {Link} from 'react-router-dom';
import {useForm} from '../../hooks/useForm';
import {User} from '../../types/Types';
import {useDispatch, useSelector} from 'react-redux';
import {auth} from '../../redux/actions/auth';
import Swal from 'sweetalert2';

const initialState: User = {
	email: '',
	password: '',
};

export const LoginScreen = () => {
	const dispatch = useDispatch();
	const {loading} = useSelector((state: any) => state.ui);
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
				<h3 className="text-lg font-medium mb-2">Login</h3>
				<input
					type="text"
					placeholder="email"
					name="email"
					autoComplete="off"
					className="block w-full rounded-md border-2 border-gray-300 p-2 mb-2"
					value={email}
					onChange={handleInputChange}
				/>

				<input
					type="password"
					placeholder="password"
					name="password"
					className="block w-full rounded-md border-2 border-gray-300 p-2 mb-2"
					value={password}
					onChange={handleInputChange}
				/>

				<button
					type="submit"
					className="bg-indigo-500 text-white rounded-md py-2 px-4 w-full hover:bg-indigo-600"
					disabled={loading}>
					Ingresar
				</button>

				<div className="my-2">
					<p className="text-center text-gray-500">Login with social networks</p>
					<div
						className="google-btn"
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
					className="text-indigo-500 font-medium hover:underline">
					Create new Account
				</Link>
			</form>
		</>
	);
};
