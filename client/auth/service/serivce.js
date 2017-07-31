import {ajax} from 'rxjs/observable/dom/ajax';
import config from 'config/config';

export const authService = {
	getToken({payload}) {
		return ajax.post(`${config.apiRoutes.rootApi}/${config.apiRoutes.token}`, {...payload}, {
			'Content-Type': 'application/x-www-form-urlencoded',
			'Access-Control-Allow-Origin': '*',
		});
	}
};
