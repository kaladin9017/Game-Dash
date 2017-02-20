import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';

import store from './store/configureStore';
import routes from './routes';

require('./styles/main.css');

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.getElementById('react')
);
