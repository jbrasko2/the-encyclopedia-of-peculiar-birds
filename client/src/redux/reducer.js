import birdsReducer from './birdsReducer';
import { combineReducers } from 'redux';

export const reducer = combineReducers({
  birds: birdsReducer,
});
