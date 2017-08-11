import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Modal from 'auth/modal';
import {
	initHomeState,
	toggleModalIsVisible,
	persistRemoteUser,
} from 'nav-bar/state';
import {NavBar} from './components/nav-bar';

export class NavigationBar extends PureComponent {
	openModal() {
		const { toggleModal } = this.props;
		toggleModal({
			isModalVisible: true,
		});
	}

	onLogin = (user) => {
		const { toggleModal, storeUser, resetLoginForm } = this.props;
		toggleModal({
			isModalVisible: false,
		});
		storeUser({
			user,
		});
		resetLoginForm();

	}

	onSignup = () => {
		const { toggleModal, resetSignupForm } = this.props;
		toggleModal({
			isModalVisible: false,
		});
		resetSignupForm();
	}

	onDismiss = () => {
		const { toggleModal } = this.props;
		toggleModal({
			isModalVisible: false,
		});
	}

	render() {
		const {user, isAuthenticated, isModalVisible} = this.props;
		return (<div>
			<NavBar
				isAuthenticated={isAuthenticated}
				user={user}
				onLoginClick={() => this.openModal()}
			/>
			<Modal
				onDismiss={this.onDismiss}
				afterLogin={this.onLogin}
				afterSignup={this.onSignup}
				isVisible={isModalVisible}
			/>
		</div>)
	}
}

NavigationBar.propTypes = {
	storeUser: PropTypes.func.isRequired,
	toggleModal: PropTypes.func.isRequired,
	resetLoginForm: PropTypes.func.isRequired,
	resetSignupForm: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool.isRequired,
	isModalVisible: PropTypes.bool.isRequired,
	user: PropTypes.shape({

	}).isRequired,
};

export const mapDispatchToProps = (dispatch, ownProps) => ({
	storeUser: user => dispatch(persistRemoteUser(user)),
	toggleModal: data => dispatch(toggleModalIsVisible(data)),
	resetLoginForm: () => dispatch(reset('loginForm')),
	resetSignupForm: () => dispatch(reset('signupForm')),
});

export const mapStateToProps = (state, props) => ({
	isAuthenticated: state.authReducer.isAuthenticated,
	isModalVisible: state.navReducer.isModalVisible,
	user: state.authReducer.user,
});

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
