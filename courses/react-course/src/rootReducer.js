import { combineReducers } from 'redux';
import layoutReducer from './Containers/Layout/LayoutReducers';

const rootReducer = combineReducers({
  layoutReducer
});

export default rootReducer;