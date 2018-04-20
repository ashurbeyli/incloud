import { combineReducers } from 'redux';

import homeReducer from './homeReducer';
import taskReducer from './taskReducer';

const reducer = combineReducers({
  home: homeReducer,
  tasks: taskReducer
});

export default reducer;