import React from 'react';
import PropTypes from 'prop-types';
import {
	Modal,
	ModalBox,
	ModalSwitch,
	ModalSwitchLink,
	ModalSwitchList,
	ModalSwitchListItem,
	ModalTab,
} from './modal-styled';
import {Login} from 'auth/login';
import {Signup} from 'auth/signup';

export const ModalComponent = ({
	onOverlayClick,
	isLoginVisible,
	isVisible,
	isSignupVisible,
	onLogin,
	onSignup,
	switchState,
}) => (<Modal isVisible={isVisible} onClick={onOverlayClick}>
	<ModalBox>
		<ModalSwitchList>
			<ModalSwitchListItem>
				<ModalSwitchLink onClick={() => switchState({
					isLoginVisible: true,
					isSignupVisible: false,
				})} selected={isLoginVisible}>Sign in</ModalSwitchLink>
			</ModalSwitchListItem>
			<ModalSwitchListItem>
				<ModalSwitchLink onClick={() => switchState({
					isLoginVisible: false,
					isSignupVisible: true,
				})} selected={isSignupVisible}>New account</ModalSwitchLink>
			</ModalSwitchListItem>
		</ModalSwitchList>
		<Login onSubmit={onLogin} isVisible={isLoginVisible} />
		<Signup onSubmit={onSignup} isVisible={isSignupVisible} />
	</ModalBox>
</Modal>);

ModalComponent.propTypes = {
	isVisible: PropTypes.bool.isRequired,
	isLoginVisible: PropTypes.bool.isRequired,
	isSignupVisible: PropTypes.bool.isRequired,
	onSignup: PropTypes.func.isRequired,
	switchState: PropTypes.func.isRequired,
	onLogin: PropTypes.func.isRequired,
	onOverlayClick: PropTypes.func.isRequired,
};
