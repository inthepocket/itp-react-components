import * as React from 'react';
import AutoCompleteContext from './AutoCompleteContext';
import ListItem, { ListItemInterface } from './ListItem';

const { Consumer } = AutoCompleteContext;

const List = ({
  getItemProps = () => false,
  getMenuProps = () => false,
  highlightedIndex,
  inputValue,
  items,
  selectedItem,
}: SuggestionListPropsInterface) => (
  <Consumer>
    {({ prefixCss, styles }) => {
      const className = styles ? styles.list : `${prefixCss}__list`;

      return (
        <ul {...getMenuProps()} className={className}>
          {items.map((item, index) => {
            const itemProps = getItemProps({
              index,
              item,
              key: item.value,
            });

            const isSelected =
              (selectedItem && selectedItem.value === item.value && selectedItem.value === inputValue) ||
              item.value === inputValue;

            return (
              <ListItem
                {...itemProps}
                id={item.value}
                isHighlighted={highlightedIndex === index}
                isSelected={isSelected}
                key={itemProps.key}
                value={item.value}
              />
            );
          })}
        </ul>
      );
    }}
  </Consumer>
);

interface SuggestionListPropsInterface {
  getItemProps?: Function;
  getMenuProps?: Function;
  highlightedIndex?: number | null;
  inputValue?: string | null;
  items: Array<ListItemInterface>;
  selectedItem?: ListItemInterface;
}

export default List;
