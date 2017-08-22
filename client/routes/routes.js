import React from 'react';
import {Route, Switch} from 'react-router-dom';
import AuthorizedRoute from './authorized-routes';
import {App} from 'container';
import Home from 'home/home-container';
import {Trips} from 'trips/trips-list';

export const routes = () => (
	<App>
		<Switch>
			<Route path="/home" component={Home} />
			<AuthorizedRoute path="/trips" component={Trips} />
		</Switch>
  </App>);

