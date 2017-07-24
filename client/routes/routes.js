import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {App} from 'container/container';
import Home from 'home/home-container';

export const routes = () => (
	<App>
		<Switch>
			<Route path="/home" component={Home} />
		</Switch>
  </App>);

