import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

function insertSpace(child) {
  if (child == null) {
    return
  }

  if (typeof child === 'string') {
    return <span>{child}</span> // eslint-disable-line consistent-return
  }

  return child // eslint-disable-line consistent-return
}

export default class Button extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: props.loading,
    }

    this.handleClick.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    const currentLoading = this.props.loading
    const loading = nextProps.loading

    if (currentLoading) {
      clearTimeout(this.delayTimeout)
    }

    if (typeof loading !== 'boolean' && loading && loading.delay) {
      this.delayTimeout = window.setTimeout(
        () => this.setState({loading}),
        loading.delay,
      )
    } else {
      this.setState({loading})
    }
  }

  componentWillUnmount() {
    if (this.delayTimeout) {
      clearTimeout(this.delayTimeout)
    }
  }

  handleClick(e) {
    const {onClick} = this.props
    if (onClick) {
      onClick(e)
    }
  }

  render() {
    const {
      color,
      type,
      shape,
      size,
      className,
      children,
      icon,
      prefixCls,
      ghost,
      loading: _loadingProp,
      block,
      ...rest
    } = this.props

    const {loading} = this.state

    // large => lg
    // small => sm
    let sizeCls = ''
    switch (size) {
      case 'large':
        sizeCls = 'lg'
        break
      case 'small':
        sizeCls = 'sm'
        break
      default:
        break
    }

    const classes = classNames(prefixCls, className, {
      [`${prefixCls}-color-${color}`]: color,
      [`${prefixCls}-${type}`]: type,
      [`${prefixCls}-${shape}`]: shape,
      [`${prefixCls}-${sizeCls}`]: sizeCls,
      [`${prefixCls}-icon-only`]: !children && icon,
      [`${prefixCls}-loading`]: loading,
      [`${prefixCls}-background-ghost`]: ghost,
      [`${prefixCls}-block`]: block,
    })

    const iconType = loading ? 'loading' : icon
    const iconNode = iconType ? (
      <i className="anticon anticon-loading">
        <svg
          viewBox="0 0 1024 1024"
          className="anticon-spin"
          data-icon="loading"
          width="1em"
          height="1em"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" />
        </svg>
      </i>
    ) : null
    const kids =
      children || children === 0
        ? React.Children.map(children, child => insertSpace(child))
        : null

    if ('href' in rest) {
      /* eslint-disable jsx-a11y/click-events-have-key-events */
      /* eslint-disable jsx-a11y/no-static-element-interactions */
      return (
        <a {...rest} className={classes} onClick={this.handleClick}>
          {iconNode}
          {kids}
        </a>
      )
    }
    // React does not recognize the `htmlType` prop on a DOM element. Here we pick it out of `rest`.
    const {htmlType, ...otherProps} = rest

    /* eslint-disable react/button-has-type */
    return (
      <button
        {...otherProps}
        type={htmlType || 'button'}
        className={classes}
        onClick={this.handleClick}
      >
        {iconNode}
        {kids}
      </button>
    )
  }
}

Button.defaultProps = {
  className: undefined,
  color: undefined,
  type: undefined,
  shape: undefined,
  size: undefined,
  htmlType: undefined,
  onClick: () => {},
  prefixCls: '',
  icon: undefined,
  loading: false,
  ghost: false,
  block: false,
}

Button.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  type: PropTypes.oneOf(['default', 'primary', 'ghost', 'dashed', 'danger']),
  shape: PropTypes.oneOf(['circle', 'circle-outline']),
  size: PropTypes.oneOf(['large', 'default', 'small']),
  htmlType: PropTypes.oneOf(['submit', 'button', 'reset']),
  onClick: PropTypes.func,
  prefixCls: PropTypes.string,
  loading: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  className: PropTypes.string,
  icon: PropTypes.string,
  ghost: PropTypes.bool,
  block: PropTypes.bool,
}
