import React from 'react';
import PropTypes from 'prop-types';
import {NavListLink} from './nav-link';

export const SecretListLink = ({
	isAuthenticated,
	to,
	activeClassName,
	children,
}) => (isAuthenticated
		? (<NavListLink
				to={to}
				activeClassName={activeClassName}
			>
				{children}
			</NavListLink>)
	: null);

SecretListLink.propTypes = {
	isAuthenticated: PropTypes.bool.isRequired,
	to: PropTypes.string.isRequired,
	activeClassName: PropTypes.string.isRequired,
	children: PropTypes.oneOfType([
		PropTypes.node,
		PropTypes.arrayOf(PropTypes.node),
	]).isRequired,
};
