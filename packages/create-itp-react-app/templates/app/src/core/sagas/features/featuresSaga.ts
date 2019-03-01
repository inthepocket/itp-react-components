import { AnyAction } from 'redux';
import { all, put, takeLatest, call, select } from 'redux-saga/effects';
import { normalize } from 'normalizr';
import { featureListSchema } from '<PROJECT-NAME>-core/schemas/feature';
import { fetchFeatures } from '<PROJECT-NAME>-core/services/feature';
import {
  FEATURES_FETCH_FAILURE,
  FEATURES_FETCH_SUCCESS,
  FEATURES_FETCH_REQUEST,
} from '<PROJECT-NAME>-core/actions/types';

/**
 * AnyAction: https://github.com/redux-saga/redux-saga/issues/1188#issuecomment-425717322
 */
export function* fetchFeaturesSaga({}: AnyAction) {
  try {
    const data = yield call(fetchFeatures);
    const features = normalize(data, featureListSchema);

    yield put({
      payload: { ...features },
      type: FEATURES_FETCH_SUCCESS,
    });
  } catch (error) {
    yield put({
      type: FEATURES_FETCH_FAILURE,
    });
  }
}

export default function* featuresSaga() {
  yield all([
    yield takeLatest(FEATURES_FETCH_REQUEST, fetchFeaturesSaga),
  ]);
}
