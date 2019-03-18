import * as React from 'react';
import { default as styles } from './Title.module.css';

const Title = ({
  text,
}: TitleProps) => <h1 className={styles.Title}>{text}</h1>;

interface TitleProps {
  text: string;
}

export default Title;
