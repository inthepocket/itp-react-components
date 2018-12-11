import * as React from 'react';
import capitalize from 'capitalize';
import classnames from 'classnames';
import CardContext from './CardContext';
import CardChildPropsInterface from './CardChildPropsInterface';

const { Consumer } = CardContext;

/**
 * Card Header
 */
const CardHeader = ({ children }: CardChildPropsInterface) => {
  return (
    <Consumer>
      {(cardContext) => {
        const { prefixCss, size, styles } = cardContext;
        const containerClassName = styles ? styles.header : `${prefixCss}-header`;
        const sizeClassName = styles ? styles[`headerSize${capitalize(size)}`] : `${prefixCss}-header-size-${size}`;

        const className = classnames({
          [`${containerClassName}`]: containerClassName,
          [`${sizeClassName}`]: sizeClassName,
        });

        return (
          <header className={className}>{children}</header>
        );
      }}
    </Consumer>
  );
};

export default CardHeader;
