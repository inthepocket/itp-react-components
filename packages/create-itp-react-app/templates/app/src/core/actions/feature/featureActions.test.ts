import { fetchFeatures } from './featureActions';
import { FEATURES_FETCH_REQUEST } from '../types';

test('Action: fetchFeatures', () => {
  expect(fetchFeatures()).toEqual({
    type: FEATURES_FETCH_REQUEST,
  });
});
