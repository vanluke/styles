import {mapToReducer} from 'redux0-helpers';
import {
	LOAD_TRIPS_START,
	LOAD_TRIPS_SUCCESS,
	LOAD_TRIPS_FAILS,
} from './trips-list-constants';
import {
	initState,
} from './state';

export const tripsListReducer = mapToReducer({
	[LOAD_TRIPS_START]: state => state.set('isLoading', true),
	[LOAD_TRIPS_SUCCESS]: (state, {payload: {trips}}) =>
		state.set('isLoading', false)
		.set('trips', trips),
	[LOAD_TRIPS_FAILS]: (state, {payload: { error }}) =>
		state.set('isLoading', false)
		.set('error', error),
})(initState);
