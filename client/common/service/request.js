import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import {toastr} from 'react-redux-toastr';
import {ajax} from 'rxjs/observable/dom/ajax';
import authService from 'auth/service';

export const request = ({ data = {}, path = '', type = 'get', errorMessage }) => {
	const token = authService.getTokenFromStorage();
	return ajax[type](path, { ...data }, {
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*',
		'Authorization': `Bearer ${token}`,
	}).catch(e => {
		toastr.error(errorMessage,
		'An error occured. Please contanct with administrator!');
		return Observable.of(e);
	});
};
