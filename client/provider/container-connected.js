import {Provider} from 'react-redux';
import React from 'react';
import store from 'store';
import App from 'container/container';
import {Router} from 'routes';

export default () => (<Provider store={store}>
	<Router />
</Provider>)
