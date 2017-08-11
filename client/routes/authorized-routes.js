import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

export const AuthorizedRoute = ({
	component: Component,
	pending,
	logged,
	...rest,
}) => (
		<Route {...rest} render={props => {
			if (pending) return <div>Loading...</div>
			return logged
				? <Component {...props} />
				: <Redirect to="/home" />
		}} />
	);

AuthorizedRoute.propTypes = {
	component: PropTypes.node.isRequired,
	pending: PropTypes.bool.isRequired,
	logged: PropTypes.bool.isRequired,
	rest: PropTypes.any,
};
AuthorizedRoute.defaultProps = {
	rest: undefined,
};

export const mapStateToProps = ({authReducer}) => {
	return {
		pending: authReducer.isLoading,
		logged: !!authReducer.user,
		user: authReducer.user,
	};
};
export default connect(mapStateToProps)(AuthorizedRoute);
