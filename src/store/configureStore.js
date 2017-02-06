import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from '../reducers/rootReducer';

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(ReduxPromise)
));

// const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
//
// const store = createStoreWithMiddleware(reducer);

export default store;
