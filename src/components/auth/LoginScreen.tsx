import {Link} from 'react-router-dom';
import {useForm} from '../../hooks/useForm';
import {User} from '../../types/Types';
import {useDispatch} from 'react-redux';
import {auth} from '../../actions/auth';

const initialState: User = {
	email: 'tomas@gmail.com',
	password: '1234',
};

export const LoginScreen = () => {
	const dispatch = useDispatch();

	const {formValues, handleInputChange, reset} = useForm(initialState);
	const {email, password} = formValues;

	const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		dispatch(auth.login('123', 'Tomas'));
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
					className="btn btn-primary btn-block">
					Ingresar
				</button>

				<div className="auth__social-networks">
					<p>Login with social networks</p>
					<div className="google-btn">
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