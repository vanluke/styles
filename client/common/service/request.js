import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {ajax} from 'rxjs/observable/dom/ajax';
import authService from 'auth/service';

export const request = ({ data = {}, path = '', type = 'get' }) => {
	const token = authService.getTokenFromStorage();
	return ajax[type](path, { ...data }, {
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*',
		'Authorization': `Bearer ${token}`,
	});
}
