import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Notifications from 'react-notify-toast';
import store from './store';

import Home from './pages/Home';
import Rename from './pages/Rename';

ReactDOM.render(
    <Provider store={store}>
        <Notifications />
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/rename" component={Rename} />
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);