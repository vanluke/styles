import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const ListLink = styled(Link)`
  text-decoration: none;
  color: #ccc;
  font: 25px/1 Helvetica, Verdana, sans-serif;
  text-transform: uppercase;
	transition: all .5s ease;

	&:hover {
  	color: #666;
	}

	&.active {
		font-weight: bold;
  	color: #333;
	}
`;
