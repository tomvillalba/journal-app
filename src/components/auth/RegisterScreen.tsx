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
			<form
				onSubmit={handleRegister}
				className="bg-slate-200 rounded-md p-5 flex flex-col">
				<h3 className="text-xl text-slate-900 font-bold mb-3 mt-3 ">Register</h3>
				<div className="mb-2">
					<label
						className="block text-gray-700 font-medium mb-2"
						htmlFor="name">
						Name
					</label>
					<input
						type="text"
						id="name"
						placeholder="name"
						name="name"
						autoComplete="off"
						className="w-full border border-gray-400 p-2 rounded-md"
						value={name}
						onChange={handleInputChange}
					/>
				</div>

				<div className="mb-2">
					<label
						className="block text-gray-700 font-medium mb-2"
						htmlFor="email">
						Email
					</label>
					<input
						type="text"
						id="email"
						placeholder="email"
						name="email"
						autoComplete="off"
						className="w-full border border-gray-400 p-2 rounded-md"
						value={email}
						onChange={handleInputChange}
					/>
				</div>

				<div className="mb-2">
					<label
						className="block text-gray-700 font-medium mb-2"
						htmlFor="password">
						Password
					</label>
					<input
						type="password"
						id="password"
						placeholder="password"
						name="password"
						className="w-full border border-gray-400 p-2 rounded-md"
						value={password}
						onChange={handleInputChange}
					/>
				</div>

				<div className="mb-2">
					<label
						className="block text-gray-700 font-medium mb-2"
						htmlFor="password2">
						Confirm Password
					</label>
					<input
						type="password"
						id="password2"
						placeholder="confirm password"
						name="password2"
						className="w-full border border-gray-400 p-2 rounded-md"
						value={password2}
						onChange={handleInputChange}
					/>
				</div>

				<button
					type="submit"
					disabled={loading}
					className="bg-indigo-500 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg">
					Register
				</button>

				<Link
					to="/auth/login"
					className="text-blue-500 hover:text-blue-700">
					Already registered?
				</Link>
			</form>
		</>
	);
};
