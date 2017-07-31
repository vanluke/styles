import {mapToReducer, createAction} from 'redux0-helpers';
import {
  LOGIN,
	LOGIN_SUCCESS,
	LOGIN_FAILS,
	SIGNUP,
	SIGNUP_SUCCESS,
	SIGNUP_FAILS,
	SWITCH_TAB,
} from './constants';
import {initState} from './state';

export const authReducer = mapToReducer({
    [LOGIN]: state => state.set('isLoading', true),
    [LOGIN_SUCCESS]: (state, { payload }) => state
          .set('isLoading', false)
          .set('user', payload.user),
    [LOGIN_FAILS]: (state, { payload }) => state
          .set('isLoading', false)
					.set('error', payload.error),
		[SIGNUP]: state => state.set('isLoading', true),
    [SIGNUP_SUCCESS]: (state, { payload }) => state
          .set('isLoading', false)
          .set('user', payload.user),
    [SIGNUP_FAILS]: (state, { payload }) => state
          .set('isLoading', false)
					.set('error', payload.error),
		[SWITCH_TAB]: (state, { payload }) => state
					.set('isLoginVisible', payload.isLoginVisible)
					.set('isSignupVisible', payload.isSignupVisible),
  })(initState);
