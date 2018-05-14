// Dependencies
import {
  all,
  fork
} from 'redux-saga/effects';

// ## Generator Saga Imports
import HomeSagas from '../modules/HomeView/sagas';
import HotelDetailSagas from '../modules/HotelDetailView/sagas';

export default function *root() {
  yield all([
    // ## Generator Sagas
    fork(HomeSagas),
    fork(HotelDetailSagas)
  ]);
}
