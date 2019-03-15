import * as React from 'react';
import reactTestRenderer from 'react-test-renderer';
import { StoreContext } from 'redux-react-hook';
import { default as mockState } from '<PROJECT-NAME>-mock/state';
import { createMockStore } from '<PROJECT-NAME>-mock/store';
import App from './App';

const AppComponent = (
  <StoreContext.Provider value={createMockStore(mockState)}>
    <App />
  </StoreContext.Provider>
);

test('App snapshot: default', () => {
  const tree = reactTestRenderer
    .create(AppComponent);

  expect(tree.toJSON()).toMatchSnapshot();
});

test('App snapshot: update tree to test useEffect hook', () => {
  const tree = reactTestRenderer
    .create(AppComponent);

  tree.update(AppComponent);
  expect(tree.toJSON()).toMatchSnapshot();
});

