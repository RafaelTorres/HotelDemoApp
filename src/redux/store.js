import {applyMiddleware, createStore, compose} from 'redux';
import * as reduxLoop from 'redux-loop-symbol-ponyfill';
import middleware from './middleware';
import reducer from './reducer';
import rootSagas from './sagas';
import sagaMiddleware from './middleware/sagaMiddleware';

const enhancers = [
  applyMiddleware(
    ...middleware,
    sagaMiddleware
  ),
  reduxLoop.install()
];

/* Enable redux dev tools only in development.
 * We suggest using the standalone React Native Debugger extension:
 * https://github.com/jhen0409/react-native-debugger
 */
/* eslint-disable no-undef */
const composeEnhancers = (
	__DEV__ &&
	typeof (window) !== 'undefined' &&
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
	) || compose;
/* eslint-enable no-undef */

const enhancer = composeEnhancers(...enhancers);

// create the store
const store = createStore(
  reducer,
  null,
  enhancer
);

sagaMiddleware.run(rootSagas);

export default store;
