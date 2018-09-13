import React, {PureComponent} from 'react'
import {string} from 'prop-types'
import classNames from 'classnames'

import './Button.css'

export const ButtonColor = {
  primary: 'primary',
  secondary: 'secondary',
  tertiary: 'tertiary',
}

class Button extends PureComponent {
  render() {
    const {children, color} = this.props

    const className = classNames({
      'itp-rcc-button': true,
      [`itp-rcc-button-${color}`]: color,
    })

    return (
      <button className={className} type="button">
        {children}
      </button>
    )
  }
}

Button.defaultProps = {
  children: null,
  color: null,
}

Button.propTypes = {
  children: string,
  color: string,
}

export default Button
