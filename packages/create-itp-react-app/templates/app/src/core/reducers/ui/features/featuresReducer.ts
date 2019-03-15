import { getType } from 'typesafe-actions';
import * as featureActions from '<PROJECT-NAME>-core/actions/feature/featureActions';
import { FeaturesUIInterface } from '<PROJECT-NAME>-core/types/Feature';
import { FeatureActionType } from '<PROJECT-NAME>-core/types/Action';

const initialState = {
  error: null,
  isFetchingFeatures: false,
  items: [],
};

export default (
  state: FeaturesUIInterface = initialState,
  action : FeatureActionType,
) => {
  switch (action.type) {
    case getType(featureActions.fetchFeatures.request): {
      return {
        ...state,
        error: null,
        isFetchingFeatures: true,
      };
    }
    case getType(featureActions.fetchFeatures.failure): {
      return {
        ...state,
        error: action.payload.error,
        isFetchingFeatures: false,
      };
    }
    case getType(featureActions.fetchFeatures.success): {
      return {
        ...state,
        isFetchingFeatures: false,
        items: action.payload.result,
      };
    }
    default:
      return state;
  }
};
