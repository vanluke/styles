import React from 'react';
import PropTypes from 'prop-types';
import {ModalComponent} from './modal';
import {connect} from 'react-redux';
import {
	loginStart,
	signup,
	switchTab,
} from 'auth/state';

export const ModalContainer = ({
	onLogin,
	onSignup,
	isSignupVisible,
	isLoginVisible,
	isVisible,
	switchState,
	onAfterAction,
}) => (<ModalComponent
	onLogin={onLogin}
	onSignup={onSignup}
	isSignupVisible={isSignupVisible}
	isLoginVisible={isLoginVisible}
	isVisible={isVisible}
	switchState={switchState}
/>);

ModalContainer.propTypes = {
	onLogin: PropTypes.func.isRequired,
	onSignup: PropTypes.func.isRequired,
	isSignupVisible: PropTypes.bool.isRequired,
	isLoginVisible: PropTypes.bool.isRequired,
	isVisible: PropTypes.bool.isRequired,
	switchState: PropTypes.func.isRequired,
};

export const mapStateToProps = (state, props) => ({
	isSignupVisible: state.authReducer.isSignupVisible,
	isLoginVisible: state.authReducer.isLoginVisible,
	isVisible: props.isVisible,
	afterLogin: props.afterLogin,
	afterSignup: props.afterSignup,
});

export const mapDispatchToProps = dispatch => ({
	onLogin: (data, cb) => dispatch(loginStart({...data, cb})),
	onSignup: (data, cb) => dispatch(signup({...data, cb})),
	switchState: st => dispatch(switchTab(st)),
});

export const mergeProps = (stateProps, dispatchProps, ownProps) => ({
	...stateProps,
	...ownProps,
	...dispatchProps,
	onLogin: data => dispatchProps.onLogin(data, stateProps.afterLogin),
	onSignup: data => dispatchProps.onSignup(data, stateProps.afterSignup),
});

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(ModalContainer);
