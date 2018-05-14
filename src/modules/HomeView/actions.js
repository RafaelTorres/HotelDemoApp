
// Constants
import {
  GET_HOTELS,
  GET_HOTELS_SUCCESS,
  GET_HOTELS_ERROR
} from './constants';

// Action creators
export function getHotels(queryParams) {
  return {
    type: GET_HOTELS,
    queryParams
  };
}

export function getHotelsSuccess(response) {
  return {
    type: GET_HOTELS_SUCCESS,
    response
  };
}

export function getHotelsError(error) {
  return {
    type: GET_HOTELS_ERROR,
    error
  };
}
