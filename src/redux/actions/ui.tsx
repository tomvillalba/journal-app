import {Types} from '../../types/Types';

const setError = (err: string | null) => {
	return {
		type: Types.uiSetError,
		payload: err,
	};
};

const removeError = () => {
	return {
		type: Types.uiRemoveError,
	};
};

export const ui = {
	setError,
	removeError,
};
