import React from 'react';
import {Route, Switch} from 'react-router-dom';
import AuthorizedRoute from './authorized-routes';
import {App} from 'container';
import Home from 'home/home-container';

const Trips = () => (<div>Trips</div>);

export const routes = () => (
	<App>
		<Switch>
			<Route path="/home" component={Home} />
			<AuthorizedRoute path="/trips" component={Trips} />
		</Switch>
  </App>);

