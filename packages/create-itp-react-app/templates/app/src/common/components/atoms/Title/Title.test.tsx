import * as React from 'react';
import reactTestRenderer from 'react-test-renderer';
import Title from './Title';

test('Title snapshot: default', () => {
  const tree = reactTestRenderer
    .create((
      <Title text="foo:bar" />
    ))
    .toJSON();

  expect(tree).toMatchSnapshot();
});
