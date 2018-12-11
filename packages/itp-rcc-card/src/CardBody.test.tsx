import * as React from 'react';
import { create } from 'react-test-renderer';
import CardBody from './CardBody';
import CardContext from './CardContext';

const { Provider } = CardContext;
const cssModuleMock = {
  body: 'cssModulesBody',
  bodySizeSmall: 'cssModulesBodySizeSmall',
  bodySizeLarge: 'cssModulesBodySizeLarge',
  card: 'cssModulesCard',
};

test('CardBody: default', () => {
  const tree = create((
    <CardBody>
      <p>Cras sed ante. Phasellus in massa. Curabitur dolor eros, gravida et, hendrerit ac, cursus non, massa. Aliquam lorem.</p>
    </CardBody>
  ))
  .toJSON();

  expect(tree).toMatchSnapshot();
});

test('CardBody: size: small', () => {
  const tree = create((
    <Provider value={{ prefixCss: 'card', size: 'small' }}>
      <CardBody>
        <p>Cras sed ante. Phasellus in massa. Curabitur dolor eros, gravida et, hendrerit ac, cursus non, massa. Aliquam lorem.</p>
      </CardBody>
    </Provider>
  ))
  .toJSON();

  expect(tree).toMatchSnapshot();
});

test('CardBody: size: large', () => {
  const tree = create((
    <Provider value={{ prefixCss: 'card', size: 'large' }}>
      <CardBody>
        <p>Cras sed ante. Phasellus in massa. Curabitur dolor eros, gravida et, hendrerit ac, cursus non, massa. Aliquam lorem.</p>
      </CardBody>
    </Provider>
  ))
  .toJSON();

  expect(tree).toMatchSnapshot();
});

test('CardBody: css modules: default', () => {
  const tree = create((
    <Provider value={{ prefixCss: 'card', size: 'default', styles: cssModuleMock }}>
      <CardBody>
        <p>Cras sed ante. Phasellus in massa. Curabitur dolor eros, gravida et, hendrerit ac, cursus non, massa. Aliquam lorem.</p>
      </CardBody>
    </Provider>
  ))
  .toJSON();

  expect(tree).toMatchSnapshot();
});

test('CardBody: css modules: size: small', () => {
  const tree = create((
    <Provider value={{ prefixCss: 'card', size: 'small', styles: cssModuleMock }}>
      <CardBody>
        <p>Cras sed ante. Phasellus in massa. Curabitur dolor eros, gravida et, hendrerit ac, cursus non, massa. Aliquam lorem.</p>
      </CardBody>
    </Provider>
  ))
  .toJSON();

  expect(tree).toMatchSnapshot();
});

test('CardBody: css modules: size: large', () => {
  const tree = create((
    <Provider value={{ prefixCss: 'card', size: 'large', styles: cssModuleMock }}>
      <CardBody>
        <p>Cras sed ante. Phasellus in massa. Curabitur dolor eros, gravida et, hendrerit ac, cursus non, massa. Aliquam lorem.</p>
      </CardBody>
    </Provider>
  ))
  .toJSON();

  expect(tree).toMatchSnapshot();
});