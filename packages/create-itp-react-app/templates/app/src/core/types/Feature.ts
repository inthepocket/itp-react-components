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
  isFetchingFeatures: boolean;
  items: string[];
}

export interface FeaturesPayloadInterface {
  entities: { features: FeaturesEntitiesInterface; };
  result: string[];
}

export interface FeaturesStateInterface {
  readonly entities?: FeaturesEntitiesInterface;
  readonly ui?: FeaturesUIInterface;
}
