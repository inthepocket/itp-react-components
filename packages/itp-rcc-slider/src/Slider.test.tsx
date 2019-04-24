import * as React from 'react';
import { create } from 'react-test-renderer';
import Slider from './Slider';

test('Slider: default', () => {
  const tree = create((
    <Slider />
  ))
  .toJSON();

  expect(tree).toMatchSnapshot();
});
