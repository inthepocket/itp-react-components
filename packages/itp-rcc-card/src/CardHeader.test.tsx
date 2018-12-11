import * as React from 'react';
import { create } from 'react-test-renderer';
import CardHeader from './CardHeader';
import CardContext from './CardContext';

const { Provider } = CardContext;
const cssModuleMock = {
  body: 'cssModulesBody',
  header: 'cssModulesHeader',
  headerSizeSmall: 'cssModulesHeaderSizeSmall',
  headerSizeLarge: 'cssModulesHeaderSizeLarge',
  card: 'cssModulesCard',
};

test('CardHeader: default', () => {
  const tree = create((
    <CardHeader>
      <p>Cras sed ante. Phasellus in massa. Curabitur dolor eros, gravida et, hendrerit ac, cursus non, massa. Aliquam lorem.</p>
    </CardHeader>
  ))
  .toJSON();

  expect(tree).toMatchSnapshot();
});

test('CardHeader: size: small', () => {
  const tree = create((
    <Provider value={{ prefixCss: 'card', size: 'small' }}>
      <CardHeader>
        <p>Cras sed ante. Phasellus in massa. Curabitur dolor eros, gravida et, hendrerit ac, cursus non, massa. Aliquam lorem.</p>
      </CardHeader>
    </Provider>
  ))
  .toJSON();

  expect(tree).toMatchSnapshot();
});

test('CardHeader: size: large', () => {
  const tree = create((
    <Provider value={{ prefixCss: 'card', size: 'large' }}>
      <CardHeader>
        <p>Cras sed ante. Phasellus in massa. Curabitur dolor eros, gravida et, hendrerit ac, cursus non, massa. Aliquam lorem.</p>
      </CardHeader>
    </Provider>
  ))
  .toJSON();

  expect(tree).toMatchSnapshot();
});

test('CardHeader: css modules: default', () => {
  const tree = create((
    <Provider value={{ prefixCss: 'card', size: 'default', styles: cssModuleMock }}>
      <CardHeader>
        <p>Cras sed ante. Phasellus in massa. Curabitur dolor eros, gravida et, hendrerit ac, cursus non, massa. Aliquam lorem.</p>
      </CardHeader>
    </Provider>
  ))
  .toJSON();

  expect(tree).toMatchSnapshot();
});

test('CardHeader: css modules: size: small', () => {
  const tree = create((
    <Provider value={{ prefixCss: 'card', size: 'small', styles: cssModuleMock }}>
      <CardHeader>
        <p>Cras sed ante. Phasellus in massa. Curabitur dolor eros, gravida et, hendrerit ac, cursus non, massa. Aliquam lorem.</p>
      </CardHeader>
    </Provider>
  ))
  .toJSON();

  expect(tree).toMatchSnapshot();
});

test('CardHeader: css modules: size: large', () => {
  const tree = create((
    <Provider value={{ prefixCss: 'card', size: 'large', styles: cssModuleMock }}>
      <CardHeader>
        <p>Cras sed ante. Phasellus in massa. Curabitur dolor eros, gravida et, hendrerit ac, cursus non, massa. Aliquam lorem.</p>
      </CardHeader>
    </Provider>
  ))
  .toJSON();

  expect(tree).toMatchSnapshot();
});