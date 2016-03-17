import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory, match } from 'react-router';
import routes from './routes';

import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';

const store = configureStore();

// [2] normalize user
import { Schema, normalize } from 'normalizr';
const userSchema = new Schema('user');
const response = normalize(window.__JSDATA__, userSchema);
store.dispatch({ type: 'user/load', payload: response });

ReactDOM.render(
  <Provider store={store}>
    <Router
      history={browserHistory}
      routes={routes}
    />
  </Provider>,
  document.getElementById('app')
);
