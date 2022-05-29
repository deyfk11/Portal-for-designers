import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';

import Theme from 'components/Theme';

import store from 'store/reducers/index';

import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <Theme>
      <App />
    </Theme>
  </Provider>,
  document.getElementById('root'),
);
