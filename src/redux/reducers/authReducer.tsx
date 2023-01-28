import {Action, Types} from '../../types';

interface State {
	id: string;
	name: string;
}

export const authReducer = (state: State = {} as State, action: Action) => {
	switch (action.type) {
		case Types.login:
			return {
				id: action.payload.id,
				name: action.payload.name,
			};

		case Types.logout:
			return {};

		default:
			return state;
	}
};
