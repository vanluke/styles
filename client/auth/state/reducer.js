import {mapToReducer, createAction} from 'redux0-helpers';
import {
  LOGIN,
	LOGIN_SUCCESS,
	LOGIN_FAILS,
} from './constants';
import {initState} from './state';

// export const authReducer = mapToReducer({
//     [LOGIN]: state => state.set('isLoading', true),
//     [LOGIN_SUCCESS]: (state, { payload }) => state
//           .set('isLoading', false)
//           .set('user', payload.user),
//     [LOGIN_FAILS]: (state, { payload }) => state
//           .set('isLoading', false)
//           .set('error', payload.error),
//   })(initState);

export const authReducer = (state = {}, action) => {
	return state;
}
