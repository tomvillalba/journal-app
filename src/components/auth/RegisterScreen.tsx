import validator from 'validator';
import {Link} from 'react-router-dom';
import {useForm} from '../../hooks/useForm';
import {UserRegister} from '../../types/Types';
import {useDispatch, useSelector} from 'react-redux';
import {ui} from '../../redux/actions/ui';
import {auth} from '../../redux/actions/auth';

const initialValues: UserRegister = {
	name: '',
	email: '',
	password: '',
	password2: '',
};

export const RegisterScreen = () => {
	const dispatch = useDispatch();
	const {loading} = useSelector((state: any) => state.ui);
	const {formValues, handleInputChange} = useForm(initialValues);
	const {name, email, password, password2} = formValues as UserRegister;

	const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (isFormValid()) {
			dispatch(auth.startRegisterWithEmailPasswordName(email, password, name));
		}
	};

	const isFormValid = () => {
		if (name.trim().length === 0) {
			dispatch(ui.setError('Name is required'));
			return;
		} else if (!validator.isEmail(email)) {
			dispatch(ui.setError('Email is not valid'));
			return;
		} else if (password !== password2 || password.length < 5) {
			dispatch(ui.setError('Password should be at least 6 characters and match each other'));
			return;
		}

		dispatch(ui.removeError());
		return true;
	};
	return (
		<>
			<h3 className="auth__title">Register</h3>

			<form onSubmit={handleRegister}>
				<input
					type="text"
					placeholder="name"
					name="name"
					autoComplete="off"
					className="auth__input"
					value={name}
					onChange={handleInputChange}
				/>
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
				<input
					type="password"
					placeholder="confirm password"
					name="password2"
					className="auth__input"
					value={password2}
					onChange={handleInputChange}
				/>

				<button
					type="submit"
					disabled={loading}
					className="btn btn-primary btn-block mb-5">
					Register
				</button>

				<Link
					to="/auth/login"
					className="link">
					Already registered?
				</Link>
			</form>
		</>
	);
};
