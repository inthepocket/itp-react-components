import React from 'react';
import { string, node, function as fn } from 'prop-types';

const ExampleComponent = ({ children, label, style, onClick }) => (
  <button style={style} onClick={onClick}>
    {children || label}
  </button>
);

ExampleComponent.defaultProps = {
  label: 'Button',
  onClick: () => alert('clicked'),
};

ExampleComponent.propTypes = {
  label: string,
  children: node,
  onClick: fn,
};

export default ExampleComponent;
