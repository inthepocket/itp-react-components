import React from 'react';
import { string } from 'prop-types';
import Title from '../atoms/Title';
import styles from './Header.module.css';

const Header = ({ title }) => (
  <div className={styles.header}>
    <Title text={title} />
  </div>
);

Header.propTypes = {
  title: string,
};

Header.defaultProps = {
  title: 'Default Header',
};

export default Header;
