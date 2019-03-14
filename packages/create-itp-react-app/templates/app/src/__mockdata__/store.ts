import { createStore, DeepPartial } from 'redux';
import {
  FeaturesEntitiesInterface,
  FeaturesUIInterface,
} from '<PROJECT-NAME>-core/types/Feature';
import { default as rootReducer } from '<PROJECT-NAME>-core/reducers';

interface EntitiesInterface {
  features: FeaturesEntitiesInterface;
}

interface UIInterface {
  features: FeaturesUIInterface;
}

interface StateInterface {
  entities?: EntitiesInterface;
  ui?: UIInterface;
}

export const createMockStore = (mockedState: DeepPartial<StateInterface>) =>
  createStore(rootReducer(), mockedState);
