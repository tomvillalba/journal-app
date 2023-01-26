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
const startLoading = () => {
	return {
		type: Types.uiStartLoading,
	};
};

const finishLoading = () => {
	return {
		type: Types.uiFinishLoading,
	};
};
export const ui = {
	setError,
	removeError,
	startLoading,
	finishLoading,
};
