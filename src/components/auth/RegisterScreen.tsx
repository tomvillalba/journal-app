import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import validator from 'validator';
import Swal from 'sweetalert2';
import {useForm} from '../../hooks/useForm';
import {UserRegister, AppState} from '../../types';
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
	const {loading} = useSelector((state: AppState) => state.ui);
	const {formValues, handleInputChange} = useForm(initialValues);
	const {name, email, password, password2} = formValues as UserRegister;

	const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (isFormValid()) {
			dispatch(auth.startRegisterWithEmailPasswordName(email, password, name));
		}
	};

	const handleError = (error: string) => {
		Swal.fire('Error', error, 'error');
	};

	const isFormValid = () => {
		if (name.trim().length === 0) {
			const error = 'Name is required';
			dispatch(ui.setError(error));
			handleError(error);
			return;
		} else if (!validator.isEmail(email)) {
			const error = 'Email is not valid';
			dispatch(ui.setError(error));
			handleError(error);
			return;
		} else if (password !== password2 || password.length < 5) {
			const error = 'Password should be at least 6 characters and match each other';
			dispatch(ui.setError(error));
			handleError(error);
			return;
		}

		dispatch(ui.removeError());
		return true;
	};
	return (
		<>
			<form
				onSubmit={handleRegister}
				className="bg-slate-200 rounded-md p-5 flex flex-col animate__animated animate__fadeIn animate__faster">
				<h3 className="text-slate-600 text-xl font-medium mb-2 text-center pt-1">Register</h3>
				<div className="mb-1">
					<label
						className="block text-slate-500 font-medium mb-1"
						htmlFor="name">
						Name
					</label>
					<input
						type="text"
						id="name"
						placeholder="Pepe Ramirez"
						name="name"
						autoComplete="off"
						className="w-full border border-gray-400 p-2 rounded-md focus:outline-none focus:border-indigo-400 hover:border-indigo-300"
						value={name}
						onChange={handleInputChange}
					/>
				</div>

				<div className="mb-1">
					<label
						className="block text-slate-500 font-medium mb-1"
						htmlFor="email">
						Email
					</label>
					<input
						type="text"
						id="email"
						placeholder="pepe@example.com"
						name="email"
						autoComplete="off"
						className="w-full border border-gray-400 p-2 rounded-md focus:outline-none focus:border-indigo-400 hover:border-indigo-300"
						value={email}
						onChange={handleInputChange}
					/>
				</div>

				<div className="mb-1">
					<label
						className="block text-slate-500 font-medium mb-1"
						htmlFor="password">
						Password
					</label>
					<input
						type="password"
						id="password"
						placeholder="********"
						name="password"
						className="w-full border border-gray-400 p-2 rounded-md focus:outline-none focus:border-indigo-400 hover:border-indigo-300"
						value={password}
						onChange={handleInputChange}
					/>
				</div>

				<div className="mb-2">
					<label
						className="block text-slate-500 font-medium mb-1"
						htmlFor="password2">
						Confirm Password
					</label>
					<input
						type="password"
						id="password2"
						placeholder="********"
						name="password2"
						className="w-full border border-gray-400 p-2 rounded-md focus:outline-none focus:border-indigo-400 hover:border-indigo-300"
						value={password2}
						onChange={handleInputChange}
					/>
				</div>

				<button
					type="submit"
					disabled={loading}
					className="transition ease-in-out delay-150 bg-indigo-500 hover:scale-105 hover:bg-sky-700 duration-300 font-medium text-white py-2 px-4 rounded-lg">
					Register
				</button>

				<Link
					to="/auth/login"
					className="text-blue-500 hover:text-blue-700 font-medium">
					Already registered?
				</Link>
			</form>
		</>
	);
};
