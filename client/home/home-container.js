import React, {PureComponent} from 'react';
import {HomeWrapper} from './home-wrapper';
import {connect} from 'react-redux';
import {reset} from 'redux-form';
import NavBar from 'nav-bar';
import Modal from 'auth/modal';
import {
	initHomeState,
	toggleModalIsVisible,
	persistRemoteUser,
} from 'home/state';
import {
	homeService
} from 'home/service';
export class Home extends PureComponent {
	componentWillMount() {
		const {initialize, service} = this.props;
		const state = service.getUser();
		initialize({
			isAuthenticated: state.isAuthenticated,
			user: state.user,
		});
	}

	openModal() {
		const {toggleModal} = this.props;
		toggleModal({
			isModalVisible: true,
		});
	}

	onLogin = (user) => {
		const {toggleModal, storeUser, resetLoginForm} = this.props;
		toggleModal({
			isModalVisible: false,
		});
		storeUser({
			user,
		});
		resetLoginForm();

	}

	onSignup = () => {
		const {toggleModal, resetSignupForm} = this.props;
		toggleModal({
			isModalVisible: false,
		});
		resetSignupForm();
	}

	onDismiss = () => {
		const {toggleModal} = this.props;
		// toggleModal({
		// 	isModalVisible: false,
		// });
	}

	render() {
		const {user, isAuthenticated, isModalVisible} = this.props;
		return  (<div>
			<NavBar
				onLoginClick={() => this.openModal()}
			/>
			{isAuthenticated ? `Welcome! ${user.name}` : 'Say Hi!'}
			<Modal
				onDismiss={this.onDismiss}
				afterLogin={this.onLogin}
				afterSignup={this.onSignup}
				isVisible={isModalVisible}
			/>
		</div>);
	}
}

export const mapDispatchToProps = (dispatch, ownProps) => ({
	storeUser: user => dispatch(persistRemoteUser(user)),
	initialize: data => dispatch(initHomeState(data)),
	toggleModal: data => dispatch(toggleModalIsVisible(data)),
	service: homeService,
	resetLoginForm: () => dispatch(reset('loginForm')),
	resetSignupForm: () => dispatch(reset('signupForm')),
});

export const mapStateToProps = (state, props) => ({
	isAuthenticated: state.homeReducer.isAuthenticated,
	isModalVisible: state.homeReducer.isModalVisible,
	user: state.homeReducer.user,
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
