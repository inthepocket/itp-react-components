// Inspired by ant-design/button
// https://github.com/ant-design/ant-design/blob/master/components/button/button.tsx
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function insertSpace(child) {
  if (child == null) {
    return;
  }

  if (typeof child === 'string') {
    return <span>{child}</span>; // eslint-disable-line consistent-return
  }

  return child; // eslint-disable-line consistent-return
}

function capitalize(word) {
  return word && word.charAt(0).toUpperCase() + word.slice(1);
}

export default class Button extends Component {
  static defaultProps = {
    color: undefined,
    type: undefined,
    shape: undefined,
    size: undefined,
    styles: null,
    htmlType: undefined,
    onClick: () => {},
    prefixCls: '',
    loading: false,
    ghost: false,
    block: false,
  };

  static propTypes = {
    color: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
    type: PropTypes.oneOf(['default', 'primary', 'ghost', 'dashed', 'danger']),
    shape: PropTypes.oneOf(['circle', 'circle-outline']),
    size: PropTypes.oneOf(['large', 'default', 'small']),
    // CSS Modules
    styles: PropTypes.shape({
      backgroundGhost: PropTypes.string,
      block: PropTypes.string,
      button: PropTypes.string.isRequired,
      colorPrimary: PropTypes.string,
      colorSecondary: PropTypes.string,
      colorTertiary: PropTypes.string,
      loading: PropTypes.string,
      shapeCircle: PropTypes.string,
      shapeCircleOutline: PropTypes.string,
      sizeLarge: PropTypes.string,
      sizeSmall: PropTypes.string,
      typeDanger: PropTypes.string,
      typeDashed: PropTypes.string,
      typeGhost: PropTypes.string,
      typePrimary: PropTypes.string,
    }),
    htmlType: PropTypes.oneOf(['submit', 'button', 'reset']),
    onClick: PropTypes.func,
    prefixCls: PropTypes.string,
    loading: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
    ghost: PropTypes.bool,
    block: PropTypes.bool,
  };

  state = {
    loading: this.props.loading,
  };

  componentWillReceiveProps(nextProps) {
    const { loading: currentLoading } = this.props;
    const { loading } = nextProps;

    if (currentLoading) {
      clearTimeout(this.delayTimeout);
    }

    if (typeof loading !== 'boolean' && loading && loading.delay) {
      this.delayTimeout = window.setTimeout(
        // eslint-disable-line no-undef
        () => this.setState({ loading }),
        loading.delay,
      );
    } else {
      this.setState({ loading });
    }
  }

  componentWillUnmount() {
    if (this.delayTimeout) {
      clearTimeout(this.delayTimeout);
    }
  }

  handleClick = e => {
    const { onClick } = this.props;
    if (onClick) {
      onClick(e);
    }
  };

  render() {
    const {
      color,
      type,
      shape,
      size,
      children,
      prefixCls,
      ghost,
      loading: _loadingProp,
      block,
      styles,
      ...rest
    } = this.props;

    const { loading } = this.state;

    // large => lg
    // small => sm
    let sizeCls = '';
    switch (size) {
      case 'large':
        sizeCls = 'lg';
        break;
      case 'small':
        sizeCls = 'sm';
        break;
      default:
        break;
    }

    const className = styles ?
      classNames({
        [styles[prefixCls]] : styles[prefixCls],
        [styles[`color${capitalize(color)}`]] : styles[`color${capitalize(color)}`],
        [styles[`type${capitalize(type)}`]] : type && styles[`type${capitalize(type)}`],
        [styles[`shape${capitalize(shape)}`]] : shape && styles[`shape${capitalize(shape)}`],
        [styles[`size${capitalize(size)}`]] : size && styles[`size${capitalize(size)}`],
        [styles.loading]: styles.loading && loading,
        [styles.backgroundGhost]: styles.backgroundGhost && ghost,
        [styles.block]: styles.block && block,
      }) :
      classNames(prefixCls, {
        [`${prefixCls}-color-${color}`]: color,
        [`${prefixCls}-${type}`]: type,
        [`${prefixCls}-${shape}`]: shape,
        [`${prefixCls}-${sizeCls}`]: sizeCls,
        [`${prefixCls}-loading`]: loading,
        [`${prefixCls}-background-ghost`]: ghost,
        [`${prefixCls}-block`]: block,
      });

    const kids =
      children || children === 0 ? React.Children.map(children, child => insertSpace(child)) : null;

    if (rest.href) {
      /* eslint-disable jsx-a11y/click-events-have-key-events */
      /* eslint-disable jsx-a11y/no-static-element-interactions */
      return (
        <a {...rest} className={className} onClick={this.handleClick}>
          {kids}
        </a>
      );
    }
    // React does not recognize the `htmlType` prop on a DOM element. Here we pick it out of `rest`.
    const { htmlType, ...otherProps } = rest;

    /* eslint-disable react/button-has-type */
    return (
      <button
        {...otherProps}
        type={htmlType || 'button'}
        className={className}
        onClick={this.handleClick}
      >
        {kids}
      </button>
    );
  }
}
