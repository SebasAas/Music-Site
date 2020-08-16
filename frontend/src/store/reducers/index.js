import { combineReducers } from 'redux';

import user from './userReducer';
import album from './albumReducer';
import song from './songReducer';

const rootReducer = combineReducers({
  user,
  album,
  song,
});

export default rootReducer;