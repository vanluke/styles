import React from 'react';
import PropTypes from 'prop-types';
import {Wrapper} from 'container/wrapper';
import './inject-global-styles';

export const App = ({children}) => (<Wrapper>{children}</Wrapper>);

App.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.node,
		PropTypes.arrayOf(PropTypes.node),
	]).isRequired,
};
