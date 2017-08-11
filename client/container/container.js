import React from 'react';
import PropTypes from 'prop-types';
import {Wrapper} from 'container/wrapper';
import Nav from 'nav-bar';
import './inject-global-styles';

export const App = ({ children }) => (<Wrapper><Nav />{children}</Wrapper>);

App.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.node,
		PropTypes.arrayOf(PropTypes.node),
	]).isRequired,
};
