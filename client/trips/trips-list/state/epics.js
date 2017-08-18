import {push} from 'react-router-dom';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import {createAction, mapToReducer} from 'redux0-helpers';
import {
	values,
} from 'common/middleware';
import {
	LOAD_TRIPS_START,
	LOAD_TRIPS_SUCCESS,
	LOAD_TRIPS_FAILS,
} from './trips-list-constants';

export const loadTripsStart = createAction(LOAD_TRIPS_START);
export const loadTripsSuccess = createAction(LOAD_TRIPS_SUCCESS);
export const loadTripsFails = createAction(LOAD_TRIPS_FAILS);

export const initializeTripsList = (action$, store, {tripsService}) =>
	action$.ofType(LOAD_TRIPS_START)
		.mergeMap(action => tripsService.getTrips()
			.map(({ response }) => Array.from(values(response)))
			.map(trips => loadTripsSuccess({ trips }))
			.catch((error) => Observable.of(loadTripsFails({
					error,
				}))
			)
		);
