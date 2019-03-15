import { createAsyncAction } from 'typesafe-actions';
import { FeaturesPayloadInterface } from '<PROJECT-NAME>-core/types/Feature';
import { ErrorPayloadInterface } from '<PROJECT-NAME>-core/types/Error';

import {
  FEATURES_FETCH_REQUEST,
  FEATURES_FETCH_SUCCESS,
  FEATURES_FETCH_FAILURE,
} from './types';

export const fetchFeatures = createAsyncAction(
  FEATURES_FETCH_REQUEST,
  FEATURES_FETCH_SUCCESS,
  FEATURES_FETCH_FAILURE,
)<undefined, FeaturesPayloadInterface, ErrorPayloadInterface>();
