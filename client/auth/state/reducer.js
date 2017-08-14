import {mapToReducer, createAction} from 'redux0-helpers';
import {
  LOGIN,
	LOGIN_SUCCESS,
	LOGIN_FAILS,
	SIGNUP,
	SIGNUP_SUCCESS,
	SIGNUP_FAILS,
	SWITCH_TAB,
	INIT_APP_STATE,
	LOGOUT,
	LOGOUT_FAILS,
	LOGOUT_SUCCESS,
} from './constants';
import {initState} from './state';

export const authReducer = mapToReducer({
    [LOGIN]: state => state.set('isLoading', true),
    [LOGIN_SUCCESS]: (state, { payload }) => state
					.set('isLoading', false)
					.set('isAuthenticated', true)
          .set('user', payload.user),
    [LOGIN_FAILS]: (state, { payload }) => state
					.set('isLoading', false)
					.set('isAuthenticated', false)
					.set('error', payload.error),
		[SIGNUP]: state => state.set('isLoading', true),
    [SIGNUP_SUCCESS]: (state, { payload }) => state
					.set('isLoading', false)
					.set('isAuthenticated', true)
          .set('user', payload.user),
    [SIGNUP_FAILS]: (state, { payload }) => state
					.set('isLoading', false)
					.set('isAuthenticated', false)
					.set('error', payload.error),
		[SWITCH_TAB]: (state, { payload }) => state
					.set('isLoginVisible', payload.isLoginVisible)
					.set('isSignupVisible', payload.isSignupVisible),
		[INIT_APP_STATE]: (state, { payload }) => state
			.set('isAuthenticated', !!payload.user)
			.set('user', payload.user),
		[LOGOUT]: state => state,
		[LOGOUT_FAILS]: (state, {payload}) => state
			.set('error', payload.error),
		[LOGOUT_SUCCESS]: state => state
			.set('user', undefined)
			.set('isAuthenticated', false),
  })(initState);
