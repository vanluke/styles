import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import authService from 'auth/service';

export const AuthorizedRoute = ({ logged, component: Component, ...rest }) => (
	<Route {...rest} render={props => (
		logged ? (
			<Component {...props} />
		) : (
				<Redirect to={{
					pathname: 'home',
					state: { from: props.location }
				}} />
			)
	)} />
)

AuthorizedRoute.propTypes = {
	component: PropTypes.node.isRequired,
	logged: PropTypes.bool.isRequired,
	rest: PropTypes.any,
};
AuthorizedRoute.defaultProps = {
	rest: undefined,
};

export const mapStateToProps = service => ({authReducer}) => {
	return {
		logged: authService.isAuthenticated,
		user: authReducer.user,
	};
};
export default connect(mapStateToProps(authService))(AuthorizedRoute);
