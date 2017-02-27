import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { Router, browserHistory, hashHistory } from 'react-router';

import store from './store/configureStore';
import routes from './routes';

require('./styles/main.css');

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory} routes={routes} />
  </Provider>
  , document.getElementById('root')
);
