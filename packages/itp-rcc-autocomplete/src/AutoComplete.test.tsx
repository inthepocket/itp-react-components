import 'jest-dom/extend-expect'
import * as React from 'react';
import { create } from 'react-test-renderer';
import {render, fireEvent, cleanup} from 'react-testing-library'
import AutoComplete from './AutoComplete';

const cssModuleMock = {
  autoComplete: 'cssModuleAutoComplete',
  input: 'cssModuleInput',
  list: 'cssModuleList',
  listItem: 'cssModuleListItem',
};

const items = [
  { value: 'Amsterdam' },
  { value: 'Bangkok' },
  { value: 'Brussels' },
  { value: 'London' },
  { value: 'New York' },
  { value: 'Paris' },
];

test('AutoComplete: change input value', () => {
  const utils = render(
    <AutoComplete
      items={items}
      name="city"
      onChange={() => false}
      placeholder="City"
      size="large"
      type="text"
      value=""
    />
  );

  const input = utils.getByPlaceholderText('City');
  fireEvent.change(input, { target: { value: 'Amsterdam' }});

  const list = utils.getByRole('listbox');

  utils.rerender(
    <AutoComplete
      items={items}
      name="city"
      onChange={onChange}
      placeholder="City"
      size="large"
      type="text"
      value="Amsterdam"
    />
  );

  expect(input.getAttribute('value')).toBe('Amsterdam');
});