import {Observable} from 'rxjs';
import {createAction} from 'redux0-helpers';
import 'rxjs/add/observable/dom/ajax';
import {
  LOGIN,
	LOGIN_SUCCESS,
	LOGIN_FAILS,
} from './constants';

export const loginStart = createAction(LOGIN);
export const loginSuccess = createAction(LOGIN_SUCCESS);
export const loginFails = createAction(LOGIN_FAILS);

export const login = (action$, store, {authService}) =>
   action$.ofType(LOGIN)
		.mergeMap((action) => authService.getToken(action)
			.catch(error => loginFails(error))
			.map(response => loginSuccess(response)));
