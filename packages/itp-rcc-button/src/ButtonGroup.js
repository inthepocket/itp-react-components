// Inspired by ant-design/button-group
// https://github.com/ant-design/ant-design/blob/master/components/button/button.tsx
import React from 'react';
import classNames from 'classnames';

const ButtonGroup = props => {
  const { prefixCls = '', size, className, ...others } = props;

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

  const classes = classNames(
    prefixCls,
    {
      [`${prefixCls}-${sizeCls}`]: sizeCls,
    },
    className,
  );

  return <div {...others} className={classes} />;
};

export default ButtonGroup;
