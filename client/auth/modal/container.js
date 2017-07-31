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
});

export const mapDispatchToProps = dispatch => ({
	onLogin: data => dispatch(loginStart(data)),
	onSignup: data => dispatch(signup(data)),
	switchState: st => dispatch(switchTab(st)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer);
