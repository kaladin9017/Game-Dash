import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import reducer from '../reducers/rootReducer';


const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

const store = createStoreWithMiddleware(reducer);

export default store;
