import * as React from 'react';
import { create } from 'react-test-renderer';
import Slider from './Slider';

const cssModuleMock = {
  Handle: 'cssModuleHandle',
  Slider: 'cssModuleSlider',
  Track: 'cssModuleTrack',
  Rail: 'cssModuleRail',
  isHandleActive: 'cssModuleIsHandleActive',
};

describe('Slider', () => {
  test('single value', () => {
    const tree = create((
      <Slider
        prefixCss="Slider"
        values={[25]}
      />
    ))
    .toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('single value, left track', () => {
    const tree = create((
      <Slider
        left={true}
        prefixCss="Slider"
        values={[25]}
      />
    ))
    .toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('single value, right track', () => {
    const tree = create((
      <Slider
        right={true}
        prefixCss="Slider"
        values={[25]}
      />
    ))
    .toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('single value, left + right track', () => {
    const tree = create((
      <Slider
        right={true}
        prefixCss="Slider"
        values={[25]}
      />
    ))
    .toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('multiple values', () => {
    const tree = create((
      <Slider
        left={true}
        prefixCss="Slider"
        values={[25, 50, 75]}
      />
    ))
    .toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('css modules', () => {
    const tree = create((
      <Slider
        left={true}
        values={[75]}
        styles={cssModuleMock}
      />
    ))
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});



