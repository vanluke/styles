import React, {Component} from 'react';
import {HomeWrapper} from './home-wrapper';
import NavBar from 'nav-bar';
import Modal from 'modal';

export default class Home extends Component {
	constructor(props) {
		super(...props);

		this.state = {
			isModalVisible: false,
		};
	}

	openModal() {
		this.setState((prevState, props) => ({isModalVisible: true}))
	}

	render() {
		return  (<div>
			<NavBar
				onLoginClick={() => console.log('login')}
			/>
			<button onClick={() => this.openModal()}>Open</button>
			Welcome!
			<Modal isVisible={this.state.isModalVisible} />
		</div>);
	}
}
