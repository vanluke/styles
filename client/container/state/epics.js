import {createAction} from 'redux0-helpers';
import {
	INITIALIZE,
} from './constants';

export const initApplicationState = createAction(INITIALIZE);
