import * as React from 'react';
import Feature from '<PROJECT-NAME>-common/components/atoms/Feature/Feature';
import { default as styles } from './Features.module.css';

const Features = ({ features, isLoading = false }: FeaturesProps) => {
  if (isLoading) {
    return (
      <p className={styles.isLoading}>Loading features...</p>
    );
  }

  return (
    <p className={styles.Features}>
      <span className={styles.title}>Features:</span>
      {features.map(({ id, title, url }) => (
        <Feature key={id} title={title} url={url} />
      ))}
    </p>
  );
};

interface Feature {
  id: string;
  title: string;
  url?: string;
}

interface FeaturesProps {
  features: Feature[];
  isLoading?: boolean;
}

export default Features;
