// Dependencies
import {Map, fromJS} from 'immutable';
import {loop, combineReducers} from 'redux-loop-symbol-ponyfill';

// Constants
import {RESET_STATE} from '../modules/AppView/constants';

// ## Generator Reducer Imports
import HotelDetailReducer from '../modules/HotelDetailView/reducer';
import HomeReducer from '../modules/HomeView/reducer';
import AppReducer from '../modules/AppView/reducer';
import NavigationReducer from '../modules/Navigation/reducer';

const reducers = {
  // ## Generator Reducers
  hotelDetail: HotelDetailReducer,
  home: HomeReducer,
  app: AppReducer,

  // Navigator states
  nav: NavigationReducer
};

// initial state, accessor and mutator for supporting root-level
// immutable data with redux-loop reducer combinator
const immutableStateContainer = Map();
const getImmutable = (child, key) => child ? child.get(key) : void 0;
const setImmutable = (child, key, value) => child.set(key, value);

const namespacedReducer = combineReducers(
  reducers,
  immutableStateContainer,
  getImmutable,
  setImmutable
);

export default function mainReducer(state, action) {
  const [nextState, effects] = action.type === RESET_STATE
    ? namespacedReducer(action.payload, action)
    : namespacedReducer(state || void 0, action);

  // enforce the state is immutable
  return loop(fromJS(nextState), effects);
}
