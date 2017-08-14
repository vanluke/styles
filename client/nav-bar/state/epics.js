import { createAction } from 'redux0-helpers';
import {
	TOGGLE_IS_MODAL_VISIBLE,
	SET_USER,
} from './constants';

export const toggleModalIsVisible = createAction(TOGGLE_IS_MODAL_VISIBLE);
export const persistRemoteUser = createAction(SET_USER);
