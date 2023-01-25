import thunk from 'redux-thunk';
import {
	legacy_createStore as createStore,
	combineReducers,
	applyMiddleware,
} from 'redux';
import {authReducer} from '../reducers/authReducer';

const composeEnhancers =
	(typeof window !== 'undefined' &&
		//@ts-ignore
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || //@ts-ignore
	compose;

const reducers = combineReducers({
	auth: authReducer,
});

export const store = createStore(
	reducers,
	composeEnhancers(applyMiddleware(thunk))
);
