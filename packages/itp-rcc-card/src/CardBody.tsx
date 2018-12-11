import * as React from 'react';
import capitalize from 'capitalize';
import classnames from 'classnames';
import CardContext from './CardContext';
import CardChildPropsInterface from './CardChildPropsInterface';

const { Consumer } = CardContext;

/**
 * Card Body
 */
const CardBody = ({ children }: CardChildPropsInterface) => {
  return (
    <Consumer>
      {(cardContext) => {
        const { prefixCss, size, styles } = cardContext;
        const containerClassName = styles ? styles.body : `${prefixCss}-body`;
        const sizeClassName = styles ? styles[`bodySize${capitalize(size)}`] : `${prefixCss}-body-size-${size}`;

        const className = classnames({
          [`${containerClassName}`]: containerClassName,
          [`${sizeClassName}`]: sizeClassName,
        });

        return (
          <div className={className}>{children}</div>
        );
      }}
    </Consumer>
  );
};

export default CardBody;
