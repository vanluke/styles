import React from 'react';
import PropTypes from 'prop-types';
import {
	Modal,
	ModalLabel,
	ModalInput,
	ModalOverlay,
	ModalBox,
	ModalBoxLabel,
	ModalBoxHeader,
	ModalBoxText,
} from './modal-styled';

export const ModalComponent = ({isVisible}) => (<Modal>
		<ModalOverlay isVisible={isVisible}>
			<ModalBox>
				<ModalBoxLabel>&#10006;</ModalBoxLabel>
				<ModalBoxHeader>Header</ModalBoxHeader>
				<ModalBoxText>Text</ModalBoxText>
			</ModalBox>
		</ModalOverlay>
	</Modal>);

	ModalComponent.propTypes = {
		isVisible: PropTypes.bool.isRequired,
	};
