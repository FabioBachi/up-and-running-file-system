import { createStore, combineReducers } from 'redux';

import common from './reducers/common';
import files from './reducers/files';

const store = createStore(combineReducers({
    common,
    files
}));

export default store;