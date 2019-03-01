import { FEATURES_FETCH_SUCCESS } from '<PROJECT-NAME>-core/actions/types';

export default (
  state: any = {},
  { type = '', payload = {} }: { type: string, payload: any },
) => {
  switch (type) {
    case FEATURES_FETCH_SUCCESS:
      return {
        ...state,
        ...payload.entities.features,
      };
    default:
      return state;
  }
};
