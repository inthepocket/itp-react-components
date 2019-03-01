import * as React from 'react';
import reactTestRenderer from 'react-test-renderer';
import Header from './Header';

test('Header snapshot: default', () => {
  const tree = reactTestRenderer
    .create((
      <Header title="foo:bar" />
    ))
    .toJSON();

  expect(tree).toMatchSnapshot();
});
