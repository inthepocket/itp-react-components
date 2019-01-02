import * as React from 'react';
import { default as Downshift } from 'downshift';
import AutoCompleteContext from './AutoCompleteContext';
import AutoCompleteStylesInterface from './AutoCompleteStylesInterface';
import { ListItemInterface } from './ListItem';
import Input from './Input'; // TODO: should be replaced by @inthepocket/itp-rcc-input
import List from './List';

const { Provider } = AutoCompleteContext;

const handleStateChange = onChange => (changes) => {
  if (changes.hasOwnProperty('selectedItem')) {
    onChange({value: changes.selectedItem.value})
  } else if (changes.hasOwnProperty('inputValue')) {
    onChange({value: changes.inputValue})
  }
}

/**
 * Fixes input resetting to previous selection on blur
 * happens on controlled Downshift
 * might be related to https://github.com/paypal/downshift/issues/627
 */
const stateReducer = (state, changes) => {
  switch (changes.type) {
    case Downshift.stateChangeTypes.blurInput:
      return {
        ...changes,
        inputValue: state.inputValue,
      };
    break;
    default:
      return changes;
  }
}

const AutoComplete = ({
  autoComplete = 'new-password',
  InputComponent = Input,
  isDisabled = false,
  isLoading = false,
  items,
  itemToString = item => (item && item.value) || '',
  Loader = () => (<span>Loading</span>),
  onChange,
  placeholder = '',
  prefixCss = 'auto-complete',
  size = 'default',
  type = 'text',
  value = '',
  name,
  styles = null,
}) => {
  const containerClassName = styles ? styles.autoComplete : prefixCss;
  const inputClassName = styles ? styles.input : `${prefixCss}__input`;
  const loaderClassName = styles ? styles.loader : `${prefixCss}__loader`;

  return (
    <Downshift
      onStateChange={handleStateChange(onChange)}
      itemToString={itemToString}
      inputValue={value}
      stateReducer={stateReducer}
    >
      {({
        getInputProps,
        getItemProps,
        getMenuProps,
        highlightedIndex,
        isOpen,
        selectedItem,
      }) => (
        <div className={containerClassName}>
          <Provider value={{ prefixCss, styles }}>
            <span className={inputClassName}>
              <InputComponent
                {...getInputProps()}
                autoComplete={autoComplete}
                disabled={isDisabled}
                name={name}
                placeholder={placeholder}
                size={size}
                type={type}
                value={value}
              />
            </span>
            {!isDisabled && !isLoading && isOpen && (
              <List
                getItemProps={getItemProps}
                getMenuProps={getMenuProps}
                highlightedIndex={highlightedIndex}
                inputValue={value}
                items={items}
                selectedItem={selectedItem}
              />
            )}
            {isLoading && isOpen && (
              <span className={loaderClassName}><Loader /></span>
            )}
          </Provider>
        </div>
      )}
    </Downshift>
  );
};

export interface AutoCompletePropsInterface {
  autoComplete?: 'on' | 'off' | 'new-password';
  InputComponent?: React.ReactNode | Element;
  isDisabled?: Boolean;
  isLoading?: Boolean;
  items?: Array<ListItemInterface>;
  itemToString?: Function;
  loader?: React.ReactNode | Element;
  name: string;
  onChange?: Function;
  placeholder?: string;
  prefixCss?: string;
  size?: 'small' | 'default' | 'large'; // TODO: should be replaced by @inthepocket/itp-rcc-input
  styles?: AutoCompleteStylesInterface;
  type?: 'email' | 'text' | 'search';
  value?: string;
}

export { ListItemInterface } from './ListItem';
export { default as DisableBrowserAutoComplete } from './DisableBrowserAutoComplete';

export default AutoComplete;