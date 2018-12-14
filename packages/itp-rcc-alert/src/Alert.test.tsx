import * as React from 'react';
import { create } from 'react-test-renderer';
import Alert from './Alert';

const cssModuleMock = {
  alert: 'cssModuleAlert',
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
