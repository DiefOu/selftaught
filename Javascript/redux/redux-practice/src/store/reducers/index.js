import { combineReducers } from 'redux';
import colorReducer from './ColorReducer';

export default combineReducers({
  colors: colorReducer
});