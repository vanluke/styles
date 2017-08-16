import React from 'react';
import PropTypes from 'prop-types';
import {TripsItem} from './trips-item';
import {TripsSection} from './trips-list-styled';

export const TripsList = ({
	trips,
	onTripsClick,
}) => (<TripsSection>
		{trips.map(trip => (
			<TripsItem
				{...trip}
			/>
		))}
	</TripsSection>);

TripsList.propTypes = {
	trips: PropTypes.shape({
		name: PropTypes.string,
		image: PropTypes.string,
		title: PropTypes.string,
	}),
};

TripsList.defaultProps = {
	trips: [],
};
