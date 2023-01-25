import validator from 'validator';
import {Link} from 'react-router-dom';
import {useForm} from '../../hooks/useForm';
import {UserRegister} from '../../types/Types';
import {useDispatch} from 'react-redux';
import {ui} from '../../redux/actions/ui';

const initialValues: UserRegister = {
	name: 'tomas',
	email: 'tomas@gmail.com',
	password: '123456',
	password2: '123456',
};

export const RegisterScreen = () => {
	const dispatch = useDispatch();
	const {formValues, handleInputChange} = useForm(initialValues);
	const {name, email, password, password2} = formValues as UserRegister;

	const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (isFormValid()) {
			console.log('Formulario correcto');
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
				<div className="auth__alert-error">Uuups... Algo salió mal</div>
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
					type="text"
					placeholder="name"
					name="name"
					autoComplete="off"
					className="auth__input"
					value={name}
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
