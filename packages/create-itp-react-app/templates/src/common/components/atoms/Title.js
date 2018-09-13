import React from 'react';
import { string } from 'prop-types';
import './Title.css';

const Title = ({ text }) => (
  <h1 className="title">{text}</h1>
);

Title.propTypes = {
  text: string,
};

Title.defaultProps = {
  text: 'Default title',
};

export default Title;
