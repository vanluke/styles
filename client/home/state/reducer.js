import { mapToReducer } from 'redux0-helpers';
import {
	INITIALIZE,
	TOGGLE_IS_MODAL_VISIBLE,
	SET_USER,
} from './constants';
import {
	initState,
} from './state';

export const reducer = mapToReducer({
	[INITIALIZE]: (state, { payload }) => state
		.set('isAuthenticated', payload.isAuthenticated)
		.set('user', payload.user),
	[SET_USER]: (state, {payload}) => state.set('user', payload.user),
	[TOGGLE_IS_MODAL_VISIBLE]: (state, { payload }) => state
		.set('isModalVisible',
			typeof payload.isModalVisible === 'undefiend'
				? !state.isModalVisible
				: payload.isModalVisible),
})(initState);
