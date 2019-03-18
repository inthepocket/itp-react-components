import { fetchFeatures } from './featureActions';
import {
  FEATURES_FETCH_REQUEST,
  FEATURES_FETCH_SUCCESS,
  FEATURES_FETCH_FAILURE,
} from './types';

test('Action: FEATURES_FETCH_REQUEST', () => {
  expect(fetchFeatures.request()).toEqual({
    type: FEATURES_FETCH_REQUEST,
  });
});

test('Action: FEATURES_FETCH_SUCCESS', () => {
  const normalizedFeatures = { entities: {}, result: [] };
  expect(fetchFeatures.success(normalizedFeatures)).toEqual({
    type: FEATURES_FETCH_SUCCESS,
    payload: normalizedFeatures,
  });
});

test('Action: FEATURES_FETCH_FAILURE', () => {
  const error = new Error('foo:bar');
  expect(fetchFeatures.failure(error)).toEqual({
    type: FEATURES_FETCH_FAILURE,
    payload: error,
  });
});
