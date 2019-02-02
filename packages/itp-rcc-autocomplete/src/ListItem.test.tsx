import * as React from 'react';
import { create } from 'react-test-renderer';
import ListItem from './ListItem';

test('Autocomplete ListItem snapshot', () => {
  const tree = create((
    <ListItem
      id="amsterdam"
      value="Amsterdam"
    />
  ))
  .toJSON();

  expect(tree).toMatchSnapshot();
});