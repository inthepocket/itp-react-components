import * as React from 'react';
import classnames from 'classnames';

import { GetHandleProps } from 'react-compound-slider/Handles/Handles';

export interface HandleStyles {
  Handle?: string;
  isHandleActive?: string;
}

export interface HandleProps {
  activeHandleID?: string;
  getHandleProps: GetHandleProps;
  id: string;
  key?: string;
  percent: number;
  prefixCss?: string;
  styles?: HandleStyles;
}

const Handle = ({
  activeHandleID,
  getHandleProps,
  id,
  percent,
  prefixCss,
  styles,
}: HandleProps) => {
  const containerClassName = styles ? styles.Handle : `${prefixCss}__Handle`;
  const activeClassName = styles ? styles.isHandleActive : `${prefixCss}__Handle--isActive`;
  const handleClassName = classnames({
    [containerClassName]: true,
    [activeClassName]: activeHandleID === id
  });
  const handleStyle = {
    left: `${percent}%`
  };

  return (
    <div
      className={handleClassName}
      role="slider"
      style={handleStyle}
      {...getHandleProps(id)}
    />
  );
};

export default Handle;
