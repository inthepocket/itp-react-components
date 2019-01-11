import * as React from 'react';
import { create } from 'react-test-renderer';
import List from './List';

const items = [
  { value: 'Amsterdam' },
  { value: 'Bangkok' },
  { value: 'Brussels' },
  { value: 'London' },
  { value: 'New York' },
  { value: 'Paris' },
];

test('Autocomplete List snapshot', () => {
  const tree = create((
    <List
      getItemProps={() => ({ key: Math.random() })}
      items={items}
    />
  ))
  .toJSON();

  expect(tree).toMatchSnapshot();
});