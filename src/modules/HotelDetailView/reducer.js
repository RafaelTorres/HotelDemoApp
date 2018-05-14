// Dependencies
import {Map} from 'immutable';

// Constants
import {
  GET_HOTEL_DETAIL,
  GET_HOTEL_DETAIL_SUCCESS,
  GET_HOTEL_DETAIL_ERROR
} from './constants';

// Initial state
const initialState = Map({
  hotel: Map({}),
  loading: false,
  response: Map({
    message: false,
    type: false
  })
});

// Reducer
export default function HotelDetailStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case GET_HOTEL_DETAIL:
      return state
        .set('hotel', Map({}))
        .set('loading', true)
        .set(['response', 'message'], false)
        .set(['response', 'type'], false);
    case GET_HOTEL_DETAIL_SUCCESS:
      return state
        .set('hotel', Map(action.response))
        .set('loading', false)
        .set(['response', 'message'], false)
        .set(['response', 'type'], 'success');
    case GET_HOTEL_DETAIL_ERROR:
      return state
        .set('hotel', Map({}))
        .set('loading', false)
        .set(['response', 'message'], action.error)
        .set(['response', 'type'], 'error');
    default:
      return state;
  }
}
