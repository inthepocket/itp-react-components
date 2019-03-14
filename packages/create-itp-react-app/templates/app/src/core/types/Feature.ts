export interface FeatureInterface {
  id: string;
  title: string;
  url?: string;
}

export interface FeaturesEntitiesInterface {
  [id: string]: FeatureInterface;
}

export interface FeaturesUIInterface {
  error?: any;
  isAddingFeature: boolean;
  isFetchingFeatures: boolean;
  items: string[];
}
