import React from 'react';
import styled from 'styled-components';

export const Li = styled.li`
	max-height: 1.5rem;
  float: left;
  margin-right: 0;
  border-right: 1px solid #aaa;
	padding: 0 1.2rem;

	&:last-child {
  	border-right: none;
	}
`;
