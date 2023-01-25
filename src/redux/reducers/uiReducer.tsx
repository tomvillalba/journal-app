import {Types} from '../../types/Types';
interface initialStateInterface {
	loading: boolean;
	error: string | null;
}

const initialState: initialStateInterface = {
	loading: false,
	error: null,
};

export const uiReducer = (state = initialState, action: any) => {
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
		default:
			return state;
	}
};
