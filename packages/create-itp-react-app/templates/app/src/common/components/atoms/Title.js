import React from 'react';
import { string } from 'prop-types';
import styles from './Title.module.css';

const Title = ({ text }) => <h1 className={styles.title}>{text}</h1>;

Title.propTypes = {
  text: string,
};

Title.defaultProps = {
  text: 'Default title',
};

export default Title;
