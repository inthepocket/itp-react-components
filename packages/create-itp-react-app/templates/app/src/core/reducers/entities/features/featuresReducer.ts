import { getType } from 'typesafe-actions';
import * as featureActions from '<PROJECT-NAME>-core/actions/feature/featureActions';
import { FeaturesEntitiesInterface } from '<PROJECT-NAME>-core/types/Feature';
import { FeatureActionType } from '<PROJECT-NAME>-core/types/Action';

export default (
  state: FeaturesEntitiesInterface = {},
  action: FeatureActionType,
) => {
  switch (action.type) {
    case getType(featureActions.fetchFeatures.success):
      return {
        ...state,
        ...action.payload.entities.features,
      };
    default:
      return state;
  }
};
