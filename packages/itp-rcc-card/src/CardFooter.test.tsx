import * as React from 'react';
import { create } from 'react-test-renderer';
import CardFooter from './CardFooter';
import CardContext from './CardContext';

const { Provider } = CardContext;
const cssModuleMock = {
  body: 'cssModulesBody',
  footer: 'cssModulesFooter',
  footerSizeSmall: 'cssModulesFooterSizeSmall',
  footerSizeLarge: 'cssModulesFooterSizeLarge',
  card: 'cssModulesCard',
};

test('CardFooter: default', () => {
  const tree = create((
    <CardFooter>
      <p>Cras sed ante. Phasellus in massa. Curabitur dolor eros, gravida et, hendrerit ac, cursus non, massa. Aliquam lorem.</p>
    </CardFooter>
  ))
  .toJSON();

  expect(tree).toMatchSnapshot();
});

test('CardFooter: size: small', () => {
  const tree = create((
    <Provider value={{ prefixCss: 'card', size: 'small' }}>
      <CardFooter>
        <p>Cras sed ante. Phasellus in massa. Curabitur dolor eros, gravida et, hendrerit ac, cursus non, massa. Aliquam lorem.</p>
      </CardFooter>
    </Provider>
  ))
  .toJSON();

  expect(tree).toMatchSnapshot();
});

test('CardFooter: size: large', () => {
  const tree = create((
    <Provider value={{ prefixCss: 'card', size: 'large' }}>
      <CardFooter>
        <p>Cras sed ante. Phasellus in massa. Curabitur dolor eros, gravida et, hendrerit ac, cursus non, massa. Aliquam lorem.</p>
      </CardFooter>
    </Provider>
  ))
  .toJSON();

  expect(tree).toMatchSnapshot();
});

test('CardFooter: css modules: default', () => {
  const tree = create((
    <Provider value={{ prefixCss: 'card', size: 'default', styles: cssModuleMock }}>
      <CardFooter>
        <p>Cras sed ante. Phasellus in massa. Curabitur dolor eros, gravida et, hendrerit ac, cursus non, massa. Aliquam lorem.</p>
      </CardFooter>
    </Provider>
  ))
  .toJSON();

  expect(tree).toMatchSnapshot();
});

test('CardFooter: css modules: size: small', () => {
  const tree = create((
    <Provider value={{ prefixCss: 'card', size: 'small', styles: cssModuleMock }}>
      <CardFooter>
        <p>Cras sed ante. Phasellus in massa. Curabitur dolor eros, gravida et, hendrerit ac, cursus non, massa. Aliquam lorem.</p>
      </CardFooter>
    </Provider>
  ))
  .toJSON();

  expect(tree).toMatchSnapshot();
});

test('CardFooter: css modules: size: large', () => {
  const tree = create((
    <Provider value={{ prefixCss: 'card', size: 'large', styles: cssModuleMock }}>
      <CardFooter>
        <p>Cras sed ante. Phasellus in massa. Curabitur dolor eros, gravida et, hendrerit ac, cursus non, massa. Aliquam lorem.</p>
      </CardFooter>
    </Provider>
  ))
  .toJSON();

  expect(tree).toMatchSnapshot();
});