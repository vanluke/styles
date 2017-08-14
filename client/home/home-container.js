import React, {PureComponent} from 'react';
import {HomeWrapper} from './home-wrapper';
import {connect} from 'react-redux';
import NavBar from 'nav-bar';
import Modal from 'auth/modal';
import {
	initHomeState,
} from 'home/state';
import {
	homeService
} from 'home/service';
export class Home extends PureComponent {
	componentDidMount() {
	}

	render() {
		return  <div>Home</div>;
	}
}

export const mapDispatchToProps = (dispatch, ownProps) => ({
	initialize: data => dispatch(initHomeState(data)),
});

export const mapStateToProps = (state, props) => ({
	isAuthenticated: state.homeReducer.isAuthenticated,
	isModalVisible: state.homeReducer.isModalVisible,
	user: state.homeReducer.user,
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
