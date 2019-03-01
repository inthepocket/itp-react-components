import * as React from 'react';
import Title from '<PROJECT-NAME>-common/components/atoms/Title/Title';
import { default as styles } from './Header.module.css';

const Header = ({
  title,
}: HeaderProps) => (
  <div className={styles.header}>
    <Title text={title} />
  </div>
);

interface HeaderProps {
  title: string;
}

export default Header;
