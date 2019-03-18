import { default as entitiesReducer } from './index';
import { default as mockState } from '<PROJECT-NAME>-mock/state';

test('Reducer: entities', () => {
  expect(entitiesReducer(mockState.entities, {
    type: '',
  })).toEqual(mockState.entities);
});
