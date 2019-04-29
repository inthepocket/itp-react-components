import * as React from 'react';
import { create } from 'react-test-renderer';
import Track from './Track';

test('Track: default', () => {
  const tree = create((
    <Track
      getTrackProps={() => null}
      prefixCss="Slider"
      source={{ id: 'foo:bar:source', value: 75, percent: 75 }}
      target={{ id: 'foo:bar:target', value: 100, percent: 100 }}
     />
  ))
  .toJSON();

  expect(tree).toMatchSnapshot();
});

test('Track: css module', () => {
  const tree = create((
    <Track
      getTrackProps={() => null}
      source={{ id: 'foo:bar:source', value: 75, percent: 75 }}
      styles={{
        Track: 'cssModuleTrack',
      }}
      target={{ id: 'foo:bar:target', value: 100, percent: 100 }}
     />
  ))
  .toJSON();

  expect(tree).toMatchSnapshot();
});
