import { expectSaga, testSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import { normalize } from 'normalizr';
import { features as mockFeatures } from '<PROJECT-NAME>-mock/features';
import { fetchFeatures } from '<PROJECT-NAME>-core/services/feature';
import { featureListSchema } from '<PROJECT-NAME>-core/schemas/feature';
import {
  FEATURES_FETCH_FAILURE,
  FEATURES_FETCH_SUCCESS,
} from '<PROJECT-NAME>-core/actions/types';
import featuresSaga, { fetchFeaturesSaga } from './featuresSaga';

test('featuresSaga', () => {
  // Not sure how to properly test the main saga
  testSaga(featuresSaga)
    .next()
    .finish()
    .isDone();
});

test('featuresSaga: fetchFeaturesSaga', () => {
  return expectSaga(fetchFeaturesSaga, { payload: {} })
    .provide([
      [matchers.call.fn(fetchFeatures), mockFeatures],
    ])
    .put({
      payload: normalize(mockFeatures, featureListSchema),
      type: FEATURES_FETCH_SUCCESS,
    })
    .run();
});

test('featuresSaga: fetchFeaturesSaga: error', () => {
  expectSaga(fetchFeaturesSaga, { payload: {} })
    .provide([
      [matchers.call.fn(fetchFeatures), () => { throw new Error('foo:bar'); }],
    ])
    .put({
      type: FEATURES_FETCH_FAILURE,
    })
    .run();
});
