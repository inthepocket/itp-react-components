import * as React from 'react';
import { create } from 'react-test-renderer';
import Alert from './Alert';

const cssModuleMock = {
  alert: 'cssModuleAlert',
  button: 'cssModuleButton',
  dismissButton: 'cssModuleDismissButton',
  typeDefault: 'cssModuleTypeDefault',
  typeSuccess: 'cssModuleTypeSuccess',
  typeDanger: 'cssModuleTypeDanger',
  typeInfo: 'cssModuleTypeInfo',
};

test('Alert: default', () => {
  const tree = create((
    <Alert>
      <p>Default alert</p>
    </Alert>
  ))
  .toJSON();

  expect(tree).toMatchSnapshot();
});

test('Alert: success', () => {
  const tree = create((
    <Alert type="success">
      <p>Success alert</p>
    </Alert>
  ))
  .toJSON();

  expect(tree).toMatchSnapshot();
});

test('Alert: danger', () => {
  const tree = create((
    <Alert type="danger">
      <p>Danger alert</p>
    </Alert>
  ))
  .toJSON();

  expect(tree).toMatchSnapshot();
});

test('Alert: info', () => {
  const tree = create((
    <Alert type="info">
      <p>Info alert</p>
    </Alert>
  ))
  .toJSON();

  expect(tree).toMatchSnapshot();
});

test('Alert: with dismiss button', () => {
  const tree = create((
    <Alert hasDismissButton={true} onDismiss={() => false}>
      <p>Dismissible alert</p>
    </Alert>
  ))
  .toJSON();

  expect(tree).toMatchSnapshot();
});

test('Alert: with dismiss button and dismiss icon', () => {
  const tree = create((
    <Alert hasDismissButton={true} dismissIcon={<span>dismiss icon</span>} onDismiss={() => false}>
      <p>Dismissible alert</p>
    </Alert>
  ))
  .toJSON();

  expect(tree).toMatchSnapshot();
});

test('Alert: with dismiss button, dismiss icon and aria label', () => {
  const tree = create((
    <Alert
      dismissButtonAriaLabel="Dismiss label"
      dismissIcon={<span>dismiss icon</span>}
      hasDismissButton={true}
      onDismiss={() => false}
    >
      <p>Dismissible alert</p>
    </Alert>
  ))
  .toJSON();

  expect(tree).toMatchSnapshot();
});

test('Alert: with css module: default', () => {
  const tree = create((
    <Alert styles={cssModuleMock}>
      <p>Default alert</p>
    </Alert>
  ))
  .toJSON();

  expect(tree).toMatchSnapshot();
});

test('Alert: with css module: success', () => {
  const tree = create((
    <Alert styles={cssModuleMock} type="success">
      <p>Success alert</p>
    </Alert>
  ))
  .toJSON();

  expect(tree).toMatchSnapshot();
});

test('Alert: with css module: danger', () => {
  const tree = create((
    <Alert styles={cssModuleMock} type="danger">
      <p>Danger alert</p>
    </Alert>
  ))
  .toJSON();

  expect(tree).toMatchSnapshot();
});

test('Alert: with css module: info', () => {
  const tree = create((
    <Alert styles={cssModuleMock} type="info">
      <p>Info alert</p>
    </Alert>
  ))
  .toJSON();

  expect(tree).toMatchSnapshot();
});

test('Alert: with css module: with dismiss button', () => {
  const tree = create((
    <Alert
      hasDismissButton={true}
      onDismiss={() => false}
      styles={cssModuleMock}
    >
      <p>Dismissible alert</p>
    </Alert>
  ))
  .toJSON();

  expect(tree).toMatchSnapshot();
});

test('Alert: with css module: with dismiss button and dismiss icon', () => {
  const tree = create((
    <Alert
      dismissIcon={<span>dismiss icon</span>}
      hasDismissButton={true}
      onDismiss={() => false}
      styles={cssModuleMock}
    >
      <p>Dismissible alert</p>
    </Alert>
  ))
  .toJSON();

  expect(tree).toMatchSnapshot();
});

test('Alert: with css module: with dismiss button, dismiss icon and aria label', () => {
  const tree = create((
    <Alert
      dismissButtonAriaLabel="Dismiss label"
      dismissIcon={<span>dismiss icon</span>}
      hasDismissButton={true}
      onDismiss={() => false}
      styles={cssModuleMock}
    >
      <p>Dismissible alert</p>
    </Alert>
  ))
  .toJSON();

  expect(tree).toMatchSnapshot();
});
