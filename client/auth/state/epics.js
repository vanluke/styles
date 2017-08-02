import {Observable} from 'rxjs';
import {createAction} from 'redux0-helpers';
import 'rxjs/add/observable/dom/ajax';
import {
  LOGIN,
	LOGIN_SUCCESS,
	LOGIN_FAILS,
	SIGNUP,
	SIGNUP_SUCCESS,
	SIGNUP_FAILS,
	SWITCH_TAB,
} from './constants';

export const loginStart = createAction(LOGIN);
export const loginSuccess = createAction(LOGIN_SUCCESS);
export const loginFails = createAction(LOGIN_FAILS);

export const login = (action$, store, {authService}) =>
   action$.ofType(LOGIN)
		.mergeMap(action => authService.getToken(action)
			.catch((error) => {
				action.payload.cb(error);
				return loginFails(error);
			})
			.map(({response}) => response.token)
			.map(response => authService.saveTokenToSessionStorage(response))
			.map(response => authService.decodeToken(response))
			.map(user => {
				action.payload.cb(user);
				return loginSuccess(user);
			}));

export const signupStart = createAction(SIGNUP);
export const signupSuccess = createAction(SIGNUP_SUCCESS);
export const signupFails = createAction(SIGNUP_FAILS);

export const signup = (action$, store, {authService}) =>
   action$.ofType(LOGIN)
		.mergeMap(action => authService.createUser(action)
			.catch((error) => {
				action.payload.cb(error);
				return signupFails(error);
			})
			.map((response) => {
				action.payload.cb(response);
				return signupSuccess(response);
			}));

export const switchTab = createAction(SWITCH_TAB);
