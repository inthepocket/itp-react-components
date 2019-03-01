import * as React from 'react';
import reactTestRenderer from 'react-test-renderer';
import Feature from './Feature';

test('Feature snapshot: default', () => {
  const tree = reactTestRenderer
    .create((
      <Feature title="foo:bar" />
    ))
    .toJSON();

  expect(tree).toMatchSnapshot();
});

test('Feature snapshot: with url', () => {
  const tree = reactTestRenderer
    .create((
      <Feature title="foo:bar" url="https://foo.bar/" />
    ))
    .toJSON();

  expect(tree).toMatchSnapshot();
});
