import {useState} from 'react';
import {User} from '../types/Types';

export const useForm = (initialState = {}) => {
	const [formValues, setValues] = useState(initialState);

	const reset = () => {
		setValues(initialState);
	};

	const handleInputChange = (
		event: React.ChangeEvent<HTMLInputElement>
	): void => {
		setValues({
			...formValues,
			[event.target.name]: event.target.value,
		});
	};

	return {formValues, handleInputChange, reset} as {
		formValues: User;
		handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
		reset: () => void;
	};
};
