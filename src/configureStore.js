import gasnow from './reducers';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

const configureStore = () => {
	const middlewares = [thunk];
	// if (process.env.NODE_ENV !== 'production') {
	// 	middlewares.push(createLogger());	
	// }
	middlewares.push(createLogger());	

	return createStore(
		gasnow,
		applyMiddleware(...middlewares)
	);
};

export default configureStore;