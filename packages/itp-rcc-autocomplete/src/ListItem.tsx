import * as React from 'react';
import classnames from 'classnames';
import AutoCompleteContext from './AutoCompleteContext';
import AriaInterface from './AriaInterface';

const { Consumer } = AutoCompleteContext;

const ListItem = ({
  id,
  isHighlighted,
  isSelected,
  value,
  ...ariaProps
}: ListItemPropsInterface) => (
  <Consumer>
    {({ prefixCss, styles }) => {
      const containerClassName = styles ? styles.listItem : `${prefixCss}__listItem`;
      const highlightedClassName = styles ? styles.isHighlighted : `${prefixCss}__listItem--isHighlighted`;
      const selectedClassName = styles ? styles.isSelected : `${prefixCss}__listItem--isSelected`;

      const className = classnames({
        [`${containerClassName}`]: containerClassName,
        [`${highlightedClassName}`]: isHighlighted && highlightedClassName,
        [`${selectedClassName}`]: isSelected && selectedClassName,
      });

      return (
        <li {...ariaProps} className={className}>
          {value}
        </li>
      );
    }}
  </Consumer>
);

export interface ListItemInterface {
  value: string;
}

export interface ListItemPropsInterface extends AriaInterface {
  id: string;
  isHighlighted?: boolean;
  isSelected?: boolean;
  value: string;
}

export default ListItem;
