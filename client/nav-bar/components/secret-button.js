import React from 'react';
import PropTypes from 'prop-types';
import {NavButton} from './nav-button';

export const SecretNavButton = ({
	isAuthenticated,
	onClick,
	activeClassName,
	children,
}) => (isAuthenticated
		? (<NavButton
				onClick={onClick}
				activeClassName={activeClassName}
			>
				{children}
			</NavButton>)
		: null);

SecretNavButton.propTypes = {
	isAuthenticated: PropTypes.bool.isRequired,
	onClick: PropTypes.func.isRequired,
	activeClassName: PropTypes.string.isRequired,
	children: PropTypes.oneOfType([
		PropTypes.node,
		PropTypes.arrayOf(PropTypes.node),
	]).isRequired,
};
