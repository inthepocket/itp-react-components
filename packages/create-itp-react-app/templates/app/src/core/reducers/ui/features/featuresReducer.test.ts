import { default as reducer } from './featuresReducer';
import { default as mockState } from '<PROJECT-NAME>-mock/state';
import {
  FEATURES_FETCH_FAILURE,
  FEATURES_FETCH_SUCCESS,
  FEATURES_FETCH_REQUEST,
} from '<PROJECT-NAME>-core/actions/types';

test('Reducer: UI: default', () => {
  expect(reducer({}, {}))
    .toEqual({});

  expect(reducer(mockState.ui.features, { type: '', payload: {} }))
    .toEqual(mockState.ui.features);
});

test('Reducer: UI: FEATURES_FETCH_REQUEST', () => {
  expect(reducer({ items: [] }, {
    payload: {},
    type: FEATURES_FETCH_REQUEST,
  })).toEqual({
    isFetchingFeatures: true,
    items: [],
    error: null,
  });
});

test('Reducer: UI: FEATURES_FETCH_FAILURE', () => {
  expect(reducer({ items: [] }, {
    payload: {
      error: 'foo:bar',
    },
    type: FEATURES_FETCH_FAILURE,
  })).toEqual({
    isFetchingFeatures: false,
    items: [],
    error: 'foo:bar',
  });
});

test('Reducer: UI: FEATURES_FETCH_SUCCESS', () => {
  expect(reducer({ items: [] }, {
    payload: {
      result: mockState.ui.features.items,
    },
    type: FEATURES_FETCH_SUCCESS,
  })).toEqual({
    isFetchingFeatures: false,
    items: mockState.ui.features.items,
  });
});
