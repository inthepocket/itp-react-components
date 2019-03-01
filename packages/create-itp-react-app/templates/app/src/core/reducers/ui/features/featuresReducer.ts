import {
  FEATURES_FETCH_FAILURE,
  FEATURES_FETCH_REQUEST,
  FEATURES_FETCH_SUCCESS,
} from '<PROJECT-NAME>-core/actions/types';

const initialState = {
  error: null,
  isFetchingFeatures: false,
  items: [],
};

export default (
  state: any = initialState,
  { type = '', payload = {} } : { type: string, payload: any},
) => {
  switch (type) {
    case FEATURES_FETCH_REQUEST: {
      return {
        ...state,
        error: null,
        isFetchingFeatures: true,
      };
    }
    case FEATURES_FETCH_FAILURE: {
      return {
        ...state,
        error: payload.error,
        isFetchingFeatures: false,
      };
    }
    case FEATURES_FETCH_SUCCESS: {
      return {
        ...state,
        isFetchingFeatures: false,
        items: payload.result,
      };
    }
    default:
      return state;
  }
};
