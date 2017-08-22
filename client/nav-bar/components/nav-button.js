import React from 'react';
import PropTypes from 'prop-types';
import {Li} from './li';
import {A} from './a';

export const NavButton = ({
	onClick,
	activeClassName,
	children,
}) => (<Li>
	<A
		onClick={onClick}
		activeClassName={activeClassName}
	>
		{children}
	</A>
</Li>);

NavButton.propTypes = {
	onClick: PropTypes.func.isRequired,
	activeClassName: PropTypes.string.isRequired,
	children: PropTypes.oneOfType([
		PropTypes.node,
		PropTypes.arrayOf(PropTypes.node),
	]).isRequired,
};
