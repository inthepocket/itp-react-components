import * as React from 'react';
import reactTestRenderer from 'react-test-renderer';
import { StoreContext } from 'redux-react-hook';
import { default as mockState } from '<PROJECT-NAME>-mock/state';
import { createMockStore } from '<PROJECT-NAME>-mock/store';
import App from './App';

test('App snapshot: default', () => {
  const tree = reactTestRenderer
    .create((
      <StoreContext.Provider value={createMockStore(mockState)}>
        <App />
      </StoreContext.Provider>
    ))
    .toJSON();

  expect(tree).toMatchSnapshot();
});
