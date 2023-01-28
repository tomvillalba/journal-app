import {Action, Types, UiState} from '../../types';

const initialState: UiState = {
	loading: false,
	error: null,
};

export const uiReducer = (state = initialState, action: Action): UiState => {
	switch (action.type) {
		case Types.uiSetError:
			return {
				...state,
				error: action.payload,
			};
		case Types.uiRemoveError:
			return {
				...state,
				error: null,
			};
		case Types.uiStartLoading:
			return {
				...state,
				loading: true,
			};
		case Types.uiFinishLoading:
			return {
				...state,
				loading: false,
			};
		default:
			return state;
	}
};
