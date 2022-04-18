import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';

import App from './App';
import Theme from './components/Theme';
import rootReducer from './store/reducers/index';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

ReactDOM.render(
  <Provider store={store}>
      <Theme>
        <App />
      </Theme>
  </Provider>,
  document.getElementById('root'),
);
