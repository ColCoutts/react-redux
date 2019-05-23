import { combineReducers } from 'redux';
import lunchActions from './lunchReducer';
import emptyLunch from './removeLunchReducer';

export default combineReducers({
  lunchActions,
  emptyLunch
});
