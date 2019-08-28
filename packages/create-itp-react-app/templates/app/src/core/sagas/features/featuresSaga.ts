import { all, put, takeLatest, call } from 'redux-saga/effects';
import { normalize } from 'normalizr';
import { featureListSchema } from '<PROJECT-NAME>-core/schemas/feature';
import { fetchFeatures } from '<PROJECT-NAME>-core/services/feature';
import { fetchFeatures as fetchFeaturesAction } from '<PROJECT-NAME>-core/actions/feature/featureActions';

/**
 * AnyAction: https://github.com/redux-saga/redux-saga/issues/1188#issuecomment-425717322
 */
export function* fetchFeaturesSaga(
  {}: ReturnType<typeof fetchFeaturesAction.request>,
): Generator {
  try {
    const data = yield call(fetchFeatures);
    const features: any = normalize(data, featureListSchema);

    yield put(fetchFeaturesAction.success({ ...features }));
  } catch (error) {
    yield put(fetchFeaturesAction.failure({
      error,
    }));
  }
}

export default function* featuresSaga() {
  yield all([
    yield takeLatest(fetchFeaturesAction.request, fetchFeaturesSaga),
  ]);
}
