import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const A = styled.a`
  text-decoration: none;
  color: #ccc;
  font: 25px/1 Helvetica, Verdana, sans-serif;
  text-transform: uppercase;
	transition: all 0.5s ease;

	&:hover {
  	color: #666;
	}

	&.active {
		font-weight: bold;
  	color: #333;
	}
`;
