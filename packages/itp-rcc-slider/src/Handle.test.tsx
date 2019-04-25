import * as React from 'react';
import { create } from 'react-test-renderer';
import Handle from './Handle';

test('Handle: default', () => {
  const tree = create((
    <Handle
      activeHandleID="foo:bar:active"
      getHandleProps={() => null}
      id="foo:bar"
      percent={75}
      prefixCss="Slider"
     />
  ))
  .toJSON();

  expect(tree).toMatchSnapshot();
});

test('Handle: css module', () => {
  const tree = create((
    <Handle
      activeHandleID="foo:bar:active"
      getHandleProps={() => null}
      id="foo:bar"
      percent={75}
      styles={{
        Handle: 'cssModuleHandle',
      }}
     />
  ))
  .toJSON();

  expect(tree).toMatchSnapshot();
});
