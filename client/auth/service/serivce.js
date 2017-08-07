import {ajax} from 'rxjs/observable/dom/ajax';
import Lockr from 'lockr';
import decode from 'jwt-decode';
import config from 'config/config';

Lockr.prefix = 'st-app';

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
		console.log(Lockr.get(config.storage.token));
		return Lockr.get(config.storage.token);
	},
	decodeToken(token) {
		return token && decode(token);
	},
};
