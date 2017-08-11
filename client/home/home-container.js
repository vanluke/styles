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
	componentDidMount() {
		const {resetSignupForm, resetLoginForm} = this.props;
		resetLoginForm();
		resetSignupForm();
	}



	render() {
		return  <div>Home</div>;
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
