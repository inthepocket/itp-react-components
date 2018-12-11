import * as React from 'react';
import { create } from 'react-test-renderer';
import Card from './Card';

const cssModuleMock = {
  body: 'cssModulesBody',
  bodySizeLarge: 'cssModulesBodySizeLarge',
  bodySizeSmall: 'cssModulesBodySizeSmall',
  card: 'cssModulesCard',
  footer: 'cssModulesFooter',
  footerSizeLarge: 'cssModulesFooterSizeLarge',
  footerSizeSmall: 'cssModulesFooterSizeSmall',
  header: 'cssModulesHeader',
  headerSizeLarge: 'cssModulesHeaderSizeLarge',
  headerSizeSmall: 'cssModulesHeaderSizeSmall',
  typePrimary: 'cssModulesTypePrimary',
  typeSecondary: 'cssModulesTypeSecondary',
  typeTertiary: 'cssModulesTypeTertiary',
};

const CardBody = () => (<p>Cras sed ante. Phasellus in massa. Curabitur dolor eros, gravida et, hendrerit ac, cursus non, massa. Aliquam lorem.</p>);
const CardFooter = () => (<p>Quis nostrum exercitationem ullam corporis suscipit.</p>);
const CardHeader = () => (<h1>Excepteur sint occaecat cupidatat</h1>);
const CardBodyWithTitle = () => (
  <React.Fragment>
    <h2>Ullamco laboris nisi ut</h2>
    <CardBody />
  </React.Fragment>
);

test('Card: default', () => {
  const tree = create((
    <Card size="default">
      <Card.Body>
        <CardBodyWithTitle />
      </Card.Body>
    </Card>
  ))
  .toJSON();

  expect(tree).toMatchSnapshot();
});

test('Card: linked', () => {
  const tree = create((
    <Card href="https://inthepocket.mobi/" size="default">
      <Card.Body>
        <CardBodyWithTitle />
      </Card.Body>
    </Card>
  ))
  .toJSON();

  expect(tree).toMatchSnapshot();
});

test('Card: linked with target', () => {
  const tree = create((
    <Card href="https://inthepocket.mobi/" size="default" target="_blank">
      <Card.Body>
        <CardBodyWithTitle />
      </Card.Body>
    </Card>
  ))
  .toJSON();

  expect(tree).toMatchSnapshot();
});

test('Card: onClick', () => {
  const tree = create((
    <Card onClick={() => 'foo:bar'} size="default">
      <Card.Body>
        <CardBodyWithTitle />
      </Card.Body>
    </Card>
  ))
  .toJSON();

  expect(tree.props.onClick()).toBe('foo:bar');
  expect(tree).toMatchSnapshot();
});

test('Card: size: small', () => {
  const tree = create((
    <Card size="small">
      <Card.Body>
        <CardBodyWithTitle />
      </Card.Body>
    </Card>
  ))
  .toJSON();

  expect(tree).toMatchSnapshot();
});

test('Card: size: large', () => {
  const tree = create((
    <Card size="large">
      <Card.Body>
        <CardBodyWithTitle />
      </Card.Body>
    </Card>
  ))
  .toJSON();

  expect(tree).toMatchSnapshot();
});

test('Card: type: primary', () => {
  const tree = create((
    <Card type="primary">
      <Card.Body>
        <CardBodyWithTitle />
      </Card.Body>
    </Card>
  ))
  .toJSON();

  expect(tree).toMatchSnapshot();
});

test('Card: type: secondary', () => {
  const tree = create((
    <Card type="secondary">
      <Card.Body>
        <CardBodyWithTitle />
      </Card.Body>
    </Card>
  ))
  .toJSON();

  expect(tree).toMatchSnapshot();
});

test('Card: type: tertiary', () => {
  const tree = create((
    <Card type="tertiary">
      <Card.Body>
        <CardBodyWithTitle />
      </Card.Body>
    </Card>
  ))
  .toJSON();

  expect(tree).toMatchSnapshot();
});

test('Card: css modules: default', () => {
  const tree = create((
    <Card size="default" styles={cssModuleMock}>
      <Card.Header>
        <CardHeader />
      </Card.Header>
      <Card.Body>
        <CardBodyWithTitle />
      </Card.Body>
      <Card.Footer>
        <CardFooter />
      </Card.Footer>
    </Card>
  ))
  .toJSON();

  expect(tree).toMatchSnapshot();
});

test('Card: css modules: size: small', () => {
  const tree = create((
    <Card size="small" styles={cssModuleMock}>
      <Card.Header>
        <CardHeader />
      </Card.Header>
      <Card.Body>
        <CardBodyWithTitle />
      </Card.Body>
      <Card.Footer>
        <CardFooter />
      </Card.Footer>
    </Card>
  ))
  .toJSON();

  expect(tree).toMatchSnapshot();
});

test('Card: css modules: size: large', () => {
  const tree = create((
    <Card size="large" styles={cssModuleMock}>
      <Card.Header>
        <CardHeader />
      </Card.Header>
      <Card.Body>
        <CardBodyWithTitle />
      </Card.Body>
      <Card.Footer>
        <CardFooter />
      </Card.Footer>
    </Card>
  ))
  .toJSON();

  expect(tree).toMatchSnapshot();
});

test('Card: css modules: type: primary', () => {
  const tree = create((
    <Card type="primary" styles={cssModuleMock}>
      <Card.Header>
        <CardHeader />
      </Card.Header>
      <Card.Body>
        <CardBodyWithTitle />
      </Card.Body>
      <Card.Footer>
        <CardFooter />
      </Card.Footer>
    </Card>
  ))
  .toJSON();

  expect(tree).toMatchSnapshot();
});

test('Card: css modules: type: secondary', () => {
  const tree = create((
    <Card type="secondary" styles={cssModuleMock}>
      <Card.Header>
        <CardHeader />
      </Card.Header>
      <Card.Body>
        <CardBodyWithTitle />
      </Card.Body>
      <Card.Footer>
        <CardFooter />
      </Card.Footer>
    </Card>
  ))
  .toJSON();

  expect(tree).toMatchSnapshot();
});

test('Card: css modules: type: tertiary', () => {
  const tree = create((
    <Card type="tertiary" styles={cssModuleMock}>
      <Card.Header>
        <CardHeader />
      </Card.Header>
      <Card.Body>
        <CardBodyWithTitle />
      </Card.Body>
      <Card.Footer>
        <CardFooter />
      </Card.Footer>
    </Card>
  ))
  .toJSON();

  expect(tree).toMatchSnapshot();
});

test('Card: with header', () => {
  const tree = create((
    <Card size="default">
      <Card.Header>
        <CardHeader />
      </Card.Header>
      <Card.Body>
        <CardBody />
      </Card.Body>
    </Card>
  ))
  .toJSON();

  expect(tree).toMatchSnapshot();
});

test('Card: with footer', () => {
  const tree = create((
    <Card size="default">
      <Card.Body>
        <CardBody />
      </Card.Body>
      <Card.Footer>
        <CardFooter />
      </Card.Footer>
    </Card>
  ))
  .toJSON();

  expect(tree).toMatchSnapshot();
});

test('Card: with header and footer', () => {
  const tree = create((
    <Card size="default">
      <Card.Header>
        <CardHeader />
      </Card.Header>
      <Card.Body>
        <CardBody />
      </Card.Body>
      <Card.Footer>
        <CardFooter />
      </Card.Footer>
    </Card>
  ))
  .toJSON();

  expect(tree).toMatchSnapshot();
});
