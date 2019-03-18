import {
  FeaturesEntitiesInterface,
  FeaturesUIInterface,
} from './Feature';

interface EntitiesInterface {
  features?: FeaturesEntitiesInterface;
}

interface UIInterface {
  features?: FeaturesUIInterface;
}

export interface StateInterface {
  entities?: any;
  ui?: UIInterface;
}
