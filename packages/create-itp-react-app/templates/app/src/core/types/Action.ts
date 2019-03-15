import { ActionType, StateType } from 'typesafe-actions';
import * as featureActions from '<PROJECT-NAME>-core/actions/feature/featureActions';

export type FeatureActionType  = ActionType<typeof featureActions>;
export type RootActionType = FeatureActionType;
