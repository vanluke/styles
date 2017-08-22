import React from 'react';
import PropTypes from 'prop-types';
import {
	TripsArticle,
	TripsContainer,
	TripsImage,
	TripsItemText,
	TripsItemHeader,
	TripsLink,
} from './trips-list-styled';

export const TripsItem = ({
	id,
	image,
	title,
	name,
}) => (<TripsArticle>
		<TripsImage src={image} />
		<TripsContainer>
			<TripsItemHeader>{name}</TripsItemHeader>
			<TripsItemText>{title}</TripsItemText>
		</TripsContainer>
		<TripsLink to={`trips/${id}`}>See details</TripsLink>
	</TripsArticle>);

TripsItem.propTypes = {
	image: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
};
