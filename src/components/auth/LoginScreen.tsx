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
			<h3 className="auth__title">Login</h3>

			<form onSubmit={handleLogin}>
				<input
					type="text"
					placeholder="email"
					name="email"
					autoComplete="off"
					className="auth__input"
					value={email}
					onChange={handleInputChange}
				/>

				<input
					type="password"
					placeholder="password"
					name="password"
					className="auth__input"
					value={password}
					onChange={handleInputChange}
				/>

				<button
					type="submit"
					className="btn btn-primary btn-block"
					disabled={loading}>
					Ingresar
				</button>

				<div className="auth__social-networks">
					<p>Login with social networks</p>
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
					className="link">
					Create new Account
				</Link>
			</form>
		</>
	);
};
