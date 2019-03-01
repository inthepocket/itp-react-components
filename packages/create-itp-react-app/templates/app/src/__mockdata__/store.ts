import { createStore } from 'redux';
import { default as rootReducer } from '<PROJECT-NAME>-core/reducers';

export const createMockStore = (mockedState: any) => {
  return createStore(rootReducer(), mockedState);
};
