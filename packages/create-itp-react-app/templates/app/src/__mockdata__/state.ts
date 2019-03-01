import { features } from './features';

const entitiesState = (collection: any) => collection.reduce(
  (state: any, object: any) => ({
    ...state,
    [object.id]: object,
  }),
  {},
);

const uiState = (collection: any = []) => ({
  items: collection.map((object: any) => object.id),
});

export default {
  entities: {
    features: entitiesState(features),
  },
  ui: {
    features: {
      error: null,
      isAddingFeature: false,
      isFetchingFeatures: false,
      ...uiState(features),
    },
  },
};
