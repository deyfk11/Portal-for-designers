import { combineReducers } from 'redux';

import { authorizationReducer } from './authorization';

const rootReducer = combineReducers({
  authorization: authorizationReducer,
});

export default rootReducer;
