import {Action, Types} from '../../types';

const setError = (err: string | null): Action => {
	return {
		type: Types.uiSetError,
		payload: err,
	};
};

const removeError = (): Action => {
	return {
		type: Types.uiRemoveError,
	};
};
const startLoading = (): Action => {
	return {
		type: Types.uiStartLoading,
	};
};

const finishLoading = (): Action => {
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
