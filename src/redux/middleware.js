
import promiseMiddleware from 'redux-promise';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from './middleware/loggerMiddleware';
import reactNavigationMiddleware from './middleware/reactNavigationMiddleware';

// define store middlewares as an array
export default [
  promiseMiddleware,
  thunkMiddleware,
  loggerMiddleware,
  reactNavigationMiddleware
];
