import { combineReducers } from 'redux';
import entities from './entities';
import ui from './ui';

const rootReducer = () => {
  const appReducer = combineReducers({
    entities,
    ui,
  });

  return (state: any, action: any) => appReducer(state, action);
};

export default rootReducer;
