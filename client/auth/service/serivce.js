import {ajax} from 'rxjs/observable/dom/ajax';
import config from 'config/config';

export const authService = {
	getToken(user) {
		return ajax.post(`${config.apiRoutes.rootApi}/${config.apiRoutes.token}`, user, {
			'Content-Type': 'application/x-www-form-urlencoded',
		});
	}
};
