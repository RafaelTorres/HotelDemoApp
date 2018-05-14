// Dependencies
import {
  Map,
  List
} from 'immutable';

// Constants
import {
  GET_HOTELS,
  GET_HOTELS_SUCCESS,
  GET_HOTELS_ERROR
} from './constants';

// Initial state
const initialState = Map({
  hotels: List([]),
  loading: false,
  response: Map({
    message: false,
    type: false
  })
});

// Reducer
export default function HomeStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case GET_HOTELS:
      return state
        .set('hotels', List([]))
        .set('loading', true)
        .set(['response', 'message'], false)
        .set(['response', 'type'], false);
    case GET_HOTELS_SUCCESS:
      return state
        .set('hotels', List(action.response))
        .set('loading', false)
        .set(['response', 'message'], false)
        .set(['response', 'type'], 'success');
    case GET_HOTELS_ERROR:
      return state
        .set('hotels', List([]))
        .set('loading', false)
        .set(['response', 'message'], action.error)
        .set(['response', 'type'], 'error');
    default:
      return state;
  }
}
