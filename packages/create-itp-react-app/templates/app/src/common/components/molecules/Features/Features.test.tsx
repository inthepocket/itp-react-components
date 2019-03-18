import * as React from 'react';
import reactTestRenderer from 'react-test-renderer';
import Features from './Features';
import { features } from '<PROJECT-NAME>-mock/features';

test('Features snapshot: default', () => {
  const tree = reactTestRenderer
    .create((
      <Features features={features} />
    ))
    .toJSON();

  expect(tree).toMatchSnapshot();
});

test('Features snapshot: loading state', () => {
  const tree = reactTestRenderer
    .create((
      <Features features={features} isLoading={true} />
    ))
    .toJSON();

  expect(tree).toMatchSnapshot();
});
