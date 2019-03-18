import { default as reducer } from './featuresReducer';
import { default as mockState } from '<PROJECT-NAME>-mock/state';
import { FEATURES_FETCH_SUCCESS } from '<PROJECT-NAME>-core/actions/types';

test('Reducer: entities: features: default', () => {
  expect(reducer({}, {})).toEqual({});
});

test('Reducer: entities: features: FEATURES_FETCH_SUCCESS', () => {
  expect(reducer({}, {
    type: FEATURES_FETCH_SUCCESS,
    payload: {
      entities: mockState.entities,
      result: mockState.ui.features.items,
    },
  })).toEqual(mockState.entities.features);
});
