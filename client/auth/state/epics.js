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
	INIT_APP_STATE,
	LOGOUT,
	LOGOUT_FAILS,
	LOGOUT_SUCCESS,
} from './constants';

export const loginStart = createAction(LOGIN);
export const loginSuccess = createAction(LOGIN_SUCCESS);
export const loginFails = createAction(LOGIN_FAILS);

export const login = (action$, store, {authService}) =>
   action$.ofType(LOGIN)
		.mergeMap(action => authService.getToken(action)
			.catch((error) => {
				action.payload.cb(error);
				return loginFails({error});
			})
			.map(({response}) => response.token)
			.map(response => authService.saveTokenToSessionStorage(response))
			.map(response => authService.decodeToken(response))
			.map(user => {
				action.payload.cb(user);
				return loginSuccess({user});
			}));

export const signupStart = createAction(SIGNUP);
export const signupSuccess = createAction(SIGNUP_SUCCESS);
export const signupFails = createAction(SIGNUP_FAILS);

export const signup = (action$, store, { authService }) =>
	action$.ofType(SIGNUP)
		.mergeMap(action => authService.createUser(action)
			.catch((error) => {
				action.payload.cb(error);
				return signupFails({error});
			})
			.map(({ response }) => response.token)
			.map(response => authService.saveTokenToSessionStorage(response))
			.map(response => authService.decodeToken(response))
			.map(user => {
				action.payload.cb(user);
				return signupSuccess({user});
			}));

export const switchTab = createAction(SWITCH_TAB);
export const initApplicationState = createAction(INIT_APP_STATE);

export const logoutStart = createAction(LOGOUT);
export const logoutSuccess = createAction(LOGOUT_SUCCESS);
export const logoutFails = createAction(LOGOUT_FAILS);

export const logout = (action$, store, { authService }) => action$.ofType(LOGOUT)
		.mergeMap(() => authService.logout()
		.catch(error => logoutFails({error}))
		.map(() => logoutSuccess()));

