// Dependencies
import {Map} from 'immutable';
import {
  call,
  all,
  put,
  fork,
  takeLatest
} from 'redux-saga/effects';

// Utils
import request from '../../utils/request';
import {convertObjectToQueryString} from '../../utils/helpers';

// Constants
import {
  GET_HOTELS
} from './constants';

// Redux Actions
import * as ActionCreators from './actions';

// Relative Path

// Our worker Saga: will perform the async increment task
export function* getHotels(action) {

  if (action) {

    let queryParams = '';

    if (action.queryParams) {
      queryParams = `?${convertObjectToQueryString(queryParams)}` ;
    }

    // Path URL
    const requestURL = `hotel${queryParams}`;

    const options = {
      method: 'GET'
    };

    try {
      const response = yield call(request, requestURL, options);
      let hotels = [];
      // Proccess response
      if (response && response.data) {
        hotels = response.data.map(hotel => {
          return new Map(hotel);
        });
      }

      yield put(ActionCreators.getHotelsSuccess(hotels));
    } catch (err) {
      yield put(ActionCreators.getHotelsError(err.message));
    }

  } else {
    yield put(ActionCreators.getHotelsError('Solicitud  Invalida'));
  }

}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchHomeSaga() {
  yield takeLatest(GET_HOTELS, getHotels);
}

export default function* root() {
  yield all([
    fork(watchHomeSaga)
  ]);
}
