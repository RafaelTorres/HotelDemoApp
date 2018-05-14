// Dependencies
import {
  call,
  all,
  put,
  fork,
  takeLatest
} from 'redux-saga/effects';

// Utils
import request from '../../utils/request';

// Constants
import {
  GET_HOTEL_DETAIL
} from './constants';

// Redux Actions
import * as ActionCreators from './actions';

// Relative Path

// Our worker Saga: will perform the async increment task
export function* getHotelDetail(action) {

  if (action && action.id) {

    // Path URL
    const requestURL = `hotel/${action.id}`;

    const options = {
      method: 'GET'
    };

    try {
      const response = yield call(request, requestURL, options);
      let hotel = {};
      // Proccess response
      if (response && response.data) {
        hotel = response.data[0];
      }
      yield put(ActionCreators.getHotelDetailSuccess(hotel));
    } catch (err) {
      yield put(ActionCreators.getHotelDetailError(err.message));
    }

  } else {
    yield put(ActionCreators.getHotelDetailError('Solicitud  Invalida'));
  }

}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchHotelDetailSaga() {
  yield takeLatest(GET_HOTEL_DETAIL, getHotelDetail);
}

export default function* root() {
  yield all([
    fork(watchHotelDetailSaga)
  ]);
}
