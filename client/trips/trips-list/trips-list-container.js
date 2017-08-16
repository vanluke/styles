import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {TripsList, TripsSection} from 'trips/components/trips-list';
import {Loading} from 'common/components';
import {
	selectIsLoading,
	selectTrips,
	loadTripsStart,
} from './state';

export class TripsListContainer extends PureComponent {
	componentDidMount() {
		const {initialize} = this.props;
		initialize();
	}

	render() {
		const {trips, isLoading} = this.props;
		return (<TripsSection>
			{isLoading && (<Loading />)}
			<TripsList
				trips={trips}
			/>
		</TripsSection>);
	}
}

TripsListContainer.propTypes = {
	trips: PropTypes.shape({
		name: PropTypes.string,
		image: PropTypes.string,
		title: PropTypes.string,
	}).isRequired,
	isLoading: PropTypes.bool.isRequired,
	initialize: PropTypes.func.isRequired,
};

export const mapStateToProps = state => ({
	trips: selectTrips(state),
	isLoading: selectIsLoading(state),
});

export const mapDispatchToProps = dispatch => ({
	initialize: () => dispatch(loadTripsStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TripsListContainer);
