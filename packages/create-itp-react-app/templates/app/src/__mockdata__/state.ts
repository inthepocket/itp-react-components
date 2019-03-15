import { FeatureInterface } from '<PROJECT-NAME>-core/types/Feature';
import { features } from './features';

interface EntitiesStateArgsInterface {
  collection: FeatureInterface[];
}

interface UiStateArgsInterface {
  collection: FeatureInterface[];
}

const entitiesState = (
  { collection = [] }: EntitiesStateArgsInterface,
) => collection.reduce(
  (state: any, object: any) => ({
    ...state,
    [object.id]: object,
  }),
  {},
);

const uiState = (
  { collection = [] } : UiStateArgsInterface,
) => ({
  items: collection.map((object: any) => object.id),
});

export default {
  entities: {
    features: entitiesState({ collection: features }),
  },
  ui: {
    features: {
      error: null,
      isFetchingFeatures: false,
      ...uiState({ collection: features }),
    },
  },
};
