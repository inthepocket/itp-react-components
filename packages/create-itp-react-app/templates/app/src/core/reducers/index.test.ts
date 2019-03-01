import { default as rootReducer } from './index';
import { default as mockState } from '<PROJECT-NAME>-mock/state';

test('Reducers: root', () => {
  expect(rootReducer()(mockState, { type: '' })).toEqual({
    ...mockState,
  });
});
