import React from 'react';
import PropTypes from 'prop-types';
import {Li} from './li';
import {ListLink} from './list-link';

export const NavListLink = ({
	to,
	activeClassName,
	children,
}) => (<Li>
	<ListLink
		to={to}
		activeClassName={activeClassName}
	>
		{children}
	</ListLink>
</Li>);

NavListLink.propTypes = {
	to: PropTypes.string.isRequired,
	activeClassName: PropTypes.string.isRequired,
	children: PropTypes.oneOfType([
		PropTypes.node,
		PropTypes.arrayOf(PropTypes.node),
	]).isRequired,
};
