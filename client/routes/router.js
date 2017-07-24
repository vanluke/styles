import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import {routes} from 'routes/routes';
import createBrowserHistory from 'history/createBrowserHistory';

const browserHistory = createBrowserHistory();

export default () => (<BrowserRouter history={browserHistory}
	>{routes()}</BrowserRouter>);
