import * as React from 'react';
import classnames from 'classnames';
import capitalize from 'capitalize';
import { default as Button } from '@inthepocket/itp-rcc-button';

const Alert = ({
  children,
  dismissButtonAriaLabel,
  dismissIcon,
  hasDismissButton,
  onDismiss,
  prefixCss,
  styles,
  type,
}: AlertPropsInterface) => {
  const containerClassName = styles ? styles.alert : prefixCss;
  const dissmissClassName = styles ? styles.isDismissible : `${prefixCss}--dismissible`;
  const typeClassName = styles ? styles[`type${capitalize(type)}`] : `${prefixCss}-type-${type}`;
  const dismissPrefixCss = styles ? 'dismissButton' : `${prefixCss}-dismiss-button`;

  const className = classnames({
    [`${containerClassName}`]: containerClassName,
    [`${typeClassName}`]: typeClassName,
    [`${dissmissClassName}`]: hasDismissButton && dissmissClassName,
  });

  return (
    <div className={className}>
      {children}
      {hasDismissButton && (
        <Button aria-label={dismissButtonAriaLabel} onClick={onDismiss} prefixCls={dismissPrefixCss} styles={styles}>
          {dismissIcon}
        </Button>
      )}
    </div>
  );
};

export interface AlertStylesInterface {
  alert: string;
  [key: string]: string | undefined;
}

export interface AlertPropsInterface {
  children: React.ReactNode | Element;
  dismissIcon?: React.ReactNode | Element;
  dismissButtonAriaLabel?: string;
  hasDismissButton?: Boolean;
  onDismiss?: Function;
  prefixCss: string;
  styles?: AlertStylesInterface;
  type?: 'default' | 'success' | 'danger' | 'warning' | 'info';
};

Alert.defaultProps = {
  dismissButtonAriaLabel: 'Dismiss',
  dismissIcon: <span aria-hidden="true">&times;</span>,
  hasDismissButton: false,
  onDismiss: null,
  prefixCss: 'alert',
  type: 'default',
};

export default Alert;
