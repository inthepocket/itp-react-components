import 'jest-dom/extend-expect'
import * as React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library'
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

const setup = ({
  isLoading = false,
}) => {
  const utils = render(
    <AutoComplete
      isLoading={isLoading}
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

  return {
    input,
    utils,
  };
};

afterEach(cleanup);

test('AutoComplete: controlled change input value', () => {
  const { input, utils } = setup({});

  utils.rerender(
    <AutoComplete
      items={items}
      name="city"
      onChange={() => false}
      placeholder="City"
      size="large"
      type="text"
      value="Amsterdam"
    />
  );

  expect(input.getAttribute('value')).toBe('Amsterdam');
});

test('AutoComplete: mount list & listItems when typing', () => {
  const { input, utils } = setup({});
  fireEvent.change(input, { target: { value: 'Amsterdam' }});
  const list = utils.getByRole('listbox');
  expect(list.childElementCount).toBe(items.length);
});

test('AutoComplete: loading state', () => {
  const { input, utils } = setup({ isLoading: true });
  fireEvent.change(input, { target: { value: 'Amsterdam' }});
  const loader = utils.container.lastChild;
  expect(loader.textContent).toBe('Loading');
});

