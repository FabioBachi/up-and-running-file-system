import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

import Home from './pages/Home';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Home} />
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);