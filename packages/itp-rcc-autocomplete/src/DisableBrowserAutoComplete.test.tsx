import * as React from 'react';
import { create } from 'react-test-renderer';
import DisableBrowserAutoComplete from './DisableBrowserAutoComplete';

test('DisableBrowserAutoComplete snapshot', () => {
  const tree = create((
    <DisableBrowserAutoComplete>
      <p>Browser autocomplete disabled</p>
    </DisableBrowserAutoComplete>
  ))
  .toJSON();

  expect(tree).toMatchSnapshot();
});