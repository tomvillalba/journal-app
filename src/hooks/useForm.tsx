import {useState} from 'react';
import {User} from '../types';

export const useForm = <T extends object>(initialState: T) => {
	const [formValues, setValues] = useState(initialState);

	const reset = (newFormState = initialState) => {
		setValues(newFormState);
	};

	const handleInputChange = (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	): void => {
		setValues({
			...formValues,
			[event.target.name]: event.target.value,
		});
	};

	return {formValues, handleInputChange, reset};
};
