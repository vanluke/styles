import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import {ajax} from 'rxjs/observable/dom/ajax';
import {toastr} from 'react-redux-toastr';
import Lockr from 'lockr';
import decode from 'jwt-decode';
import config from 'config/config';

//Lockr.prefix = 'st-app';

export const authService = {
	getToken({payload}) {
		return ajax.post(`${config.apiRoutes.rootApi}/${config.apiRoutes.token}`, {name: payload.name, password: payload.password}, {
			'Content-Type': 'application/x-www-form-urlencoded',
			'Access-Control-Allow-Origin': '*',
		}).catch(e => {
			toastr.error('Error while loading Signin!',
				'An error occured. Please contanct with administrator!');
			return Observable.of(e);
		});
	},
	createUser({ payload }) {
		return ajax.post(`${config.apiRoutes.rootApi}/${config.apiRoutes.signup}`, { ...payload }, {
			'Content-Type': 'application/x-www-form-urlencoded',
			'Access-Control-Allow-Origin': '*',
		}).catch(e => {
			toastr.error('Error while loading Signup!',
			'An error occured. Please contanct with administrator!');
			return Observable.of(e);
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
