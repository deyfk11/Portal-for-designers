import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';

import store from 'store/reducers/index';

import App from './App';
import Theme from './components/Theme';

ReactDOM.render(
  <Provider store={store}>
    <Theme>
      <App />
    </Theme>
  </Provider>,
  document.getElementById('root'),
);
