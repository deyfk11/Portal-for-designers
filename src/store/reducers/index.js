import { combineReducers, createStore, applyMiddleware } from 'redux';

import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';

import { accountsReducer } from './accounts';
import { allUsersReducer } from './allUsers';
import { authorizationReducer } from './authorization';
import { projectsReducer } from './projects';

const appReducer = combineReducers({
  authorization: authorizationReducer,
  allUsers: allUsersReducer,
  projects: projectsReducer,
  accounts: accountsReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
