import { applyMiddleware, combineReducers, createStore } from 'redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

import common from './reducers/common';
import files from './reducers/files';

const client = axios.create({
    baseURL: 'http://tim.uardev.com/trial-project/api',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    },
    responseEncoding: 'utf8',
    responseType: 'json',
});

const store = createStore(combineReducers({
        common,
        files
    }),
    applyMiddleware(
        axiosMiddleware(client)
    )
);

export default store;