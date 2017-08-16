import {combineEpics} from 'redux-observable';
import {initializeTripsList} from 'trips/trips-list';
import {login, signup, logout} from 'auth/state/epics';

export default combineEpics(
	login,
	signup,
	logout,
	initializeTripsList,
);
