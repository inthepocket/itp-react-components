export const getFeatureState = ({
  entities,
  ui,
}: {
  entities: any,
  ui: any,
}) => ({
  features: ui.features.items.map((featureId: string) => entities.features[featureId]),
  isFetchingFeatures: ui.features.isFetchingFeatures,
});
