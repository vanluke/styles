import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {ajax} from 'rxjs/observable/dom/ajax';
import Lockr from 'lockr';
import decode from 'jwt-decode';
import config from 'config/config';

//Lockr.prefix = 'st-app';

export const authService = {
	getToken({payload}) {
		return ajax.post(`${config.apiRoutes.rootApi}/${config.apiRoutes.token}`, {name: payload.name, password: payload.password}, {
			'Content-Type': 'application/x-www-form-urlencoded',
			'Access-Control-Allow-Origin': '*',
		});
	},
	createUser({ payload }) {
		return ajax.post(`${config.apiRoutes.rootApi}/${config.apiRoutes.signup}`, { ...payload }, {
			'Content-Type': 'application/x-www-form-urlencoded',
			'Access-Control-Allow-Origin': '*',
		});
	},
	saveTokenToSessionStorage(token) {
		Lockr.set(config.storage.token, token);
		return token;
	},
	getTokenFromStorage() {
		return Lockr.get(config.storage.token);
	},
	decodeToken(token) {
		return token && decode(token);
	},
	logout() {
		const user = this.decodeToken(this.getTokenFromStorage());
		Lockr.rm(config.storage.token);
		return Observable.of(user);
	},
	get isAuthenticated() {
		return !!Lockr.get(config.storage.token);
	}
};
