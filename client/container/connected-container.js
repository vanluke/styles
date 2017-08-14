import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {App} from './container';
import {
	initApplicationState
} from 'auth/state';
import {
	appService
} from './app-service';

export class AppContainer extends PureComponent {
	componentDidMount() {
		const {initialize, service} = this.props;
		const userState = service.getUser() || {};
		return initialize({
			isAuthenticated: userState.isAuthenticated,
			user: userState.user,
		});
	}

	componentWillReceiveProps(nextProps) {
		const {isAuthenticated, initialize} = this.props;
		if (isAuthenticated !== nextProps.isAuthenticated) {
			return initialize({
				isAuthenticated: nextProps.isAuthenticated,
				user: nextProps.user,
			});
		}
	}

	render() {
		const {children} = this.props;
		return (<App>
			{children}
		</App>);
	}
}

AppContainer.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.node,
		PropTypes.arrayOf(PropTypes.node),
	]).isRequired,
	serivce: PropTypes.shape({
		getUser: PropTypes.func,
	}).isRequired,
	initialize: PropTypes.func.isRequired,
};

export const mapDispatchToProps = dispatch => ({
	initialize: (data) => dispatch(initApplicationState(data)),
	service: appService,
});

export const mapStateToProps = ({authReducer}) => ({
	user: authReducer.user,
	isAuthenticated: authReducer.isAuthenticated,
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
