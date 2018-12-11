import * as React from 'react';
import capitalize from 'capitalize';
import classnames from 'classnames';
import CardContext from './CardContext';
import CardChildPropsInterface from './CardChildPropsInterface';

const { Consumer } = CardContext;

/**
 * Card Footer
 */
const CardFooter = ({ children }: CardChildPropsInterface) => {
  return (
    <Consumer>
      {(cardContext) => {
        const { prefixCss, size, styles } = cardContext;
        const containerClassName = styles ? styles.footer : `${prefixCss}-footer`;
        const sizeClassName = styles ? styles[`footerSize${capitalize(size)}`] : `${prefixCss}-footer-size-${size}`;

        const className = classnames({
          [`${containerClassName}`]: containerClassName,
          [`${sizeClassName}`]: sizeClassName,
        });

        return (
          <footer className={className}>{children}</footer>
        );
      }}
    </Consumer>
  );
};

export default CardFooter;
