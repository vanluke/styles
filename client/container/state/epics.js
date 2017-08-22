import {createAction} from 'redux0-helpers';
import {
	INITIALIZE,
	UPDATE_LOCATION,
} from './constants';

export const initApplicationState = createAction(INITIALIZE);

export const updateLocation = createAction(UPDATE_LOCATION);
