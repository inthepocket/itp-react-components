import { default as uiReducer } from './index';
import { default as mockState } from '<PROJECT-NAME>-mock/state';

test('Reducer: ui', () => {
  expect(uiReducer(mockState.ui, {
    type: '',
  })).toEqual(mockState.ui);
});
