import * as React from 'react';
import { default as styles } from './Feature.module.css';

const Feature = ({ url, title }: FeatureProps) => {
  if (url) {
    return (
      <a className={styles.Feature} href={url} target="_blank">{title}</a>
    );
  }
  return (
    <span className={styles.Feature}>{title}</span>
  );
};

interface FeatureProps {
  url?: string;
  title: string;
}

export default Feature;
