import {createReactNavigationReduxMiddleware} from 'react-navigation-redux-helpers';

const middleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.toJS().nav
);

export default middleware;
