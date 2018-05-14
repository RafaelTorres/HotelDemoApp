
// Constants
import {
  GET_HOTEL_DETAIL,
  GET_HOTEL_DETAIL_SUCCESS,
  GET_HOTEL_DETAIL_ERROR
} from './constants';

// Action creators
export function getHotelDetail(id) {
  return {
    type: GET_HOTEL_DETAIL,
    id
  };
}

export function getHotelDetailSuccess(response) {
  return {
    type: GET_HOTEL_DETAIL_SUCCESS,
    response
  };
}

export function getHotelDetailError(error) {
  return {
    type: GET_HOTEL_DETAIL_ERROR,
    error
  };
}
