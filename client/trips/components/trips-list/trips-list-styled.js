import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const tripsItemBoxShadowColor = 'rgba(0, 0, 0, .2)';

export const TripsListContainer = styled.section`
	max-width: 87.5rem;
	margin: 0 auto;
`;

export const TripsSection = styled.section`
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-row-gap: 3.125rem;
	grid-column-gap: 3.125rem;

	@media screen and (min-width: 40rem) {
		grid-template-columns: 1fr 1fr 1fr 1fr;
	}
`;

export const TripsHeader = styled.header`
	font-size: 120%;
`;

export const TripsArticle = styled.article`
	box-shadow: 0 .25rem .5rem 0 ${tripsItemBoxShadowColor};
	transition: .3s;
	width: 100%;
	height: 350px;
	position: relative;

	&:hover {
		box-shadow: 0 .5rem 1rem 0 ${tripsItemBoxShadowColor};
	}
`;

export const TripsContainer = styled.div`
	padding: .125rem 1rem;
`;

export const TripsImage = styled.img`
	width: 100%;
	height: 50%;
`;

export const TripsItemHeader = styled.h4`

`;

export const TripsItemText = styled.p`

`;

export const TripsLink = styled(Link)`
	bottom: 1rem;
	left: 1rem;
	position: absolute;
`;
