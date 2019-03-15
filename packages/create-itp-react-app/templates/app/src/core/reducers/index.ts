import { combineReducers } from 'redux';
import entities from './entities';
import ui from './ui';

const rootReducer = combineReducers({
  entities,
  ui,
});

export default rootReducer;
