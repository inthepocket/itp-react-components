import * as React from 'react';
import classnames from 'classnames';
import capitalize from 'capitalize';
import CardContext from './CardContext';
import CardStylesInterface from './CardStylesInterface';
import CardBody from './CardBody';
import CardFooter from './CardFooter';
import CardHeader from './CardHeader';

export interface CardPropsInterface {
  children?: React.ReactNode | Element;
  href?: string;
  prefixCss?: string;
  size?: 'small' | 'default' | 'large';
  styles?: CardStylesInterface;
  type?: 'primary' | 'secondary' | 'tertiary';
  onClick?: ((event: React.MouseEvent<HTMLElement>) => void);
  target?: string;
}

interface CardComponentPropsInterface {
  className?: string;
  href?: string;
  onClick?: ((event: React.MouseEvent<HTMLElement>) => void);
  target?: string;
};

const { Provider } = CardContext;

/**
 * Card
 */
class Card extends React.PureComponent<CardPropsInterface> {
  static defaultProps = {
    prefixCss: 'card',
    size: 'default',
    target: '_self',
    type: 'primary',
  };

  static Body = CardBody;
  static Header = CardHeader;
  static Footer = CardFooter;

  render() {
    const { children, href, prefixCss, onClick, size, styles, target, type } = this.props;
    const containerClassName = styles ? styles.card : prefixCss;
    const linkClassName = styles ? styles.link : `${prefixCss}-link`;
    const typeClassName = styles ? styles[`type${capitalize(type)}`] : `${prefixCss}-type-${type}`;

    const className = classnames({
      [`${containerClassName}`]: containerClassName,
      [`${linkClassName}`]: href && linkClassName,
      [`${typeClassName}`]: typeClassName,
    });

    const cardComponentProps: CardComponentPropsInterface = {
      className,
    };

    if (href) {
      cardComponentProps.href = href;

      if (target) {
        cardComponentProps.target = target;
      }
    }

    if (onClick) {
      cardComponentProps.onClick = onClick;
    }

    const cardComponent = href ? <a {...cardComponentProps}>{children}</a> :
      <div {...cardComponentProps}>{children}</div>;

    return (
      <Provider value={{ prefixCss, size, styles }}>
        {cardComponent}
      </Provider>
    );
  }
}

export default Card;
