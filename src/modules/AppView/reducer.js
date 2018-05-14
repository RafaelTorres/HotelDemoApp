// Dependencies
import {Map} from 'immutable';

// Constants
import {
  RESET_STATE,
  INITIALIZE_STATE
} from './constants';

// Initial State
const initialState = Map({
  isReady: false
});

// Reducer
export default function AppReducer(state = initialState, action = {}) {
  switch (action.type) {
    case INITIALIZE_STATE:
    case RESET_STATE:
      return state
        .set('isReady', true);
    default:
      return state;
  }
}
