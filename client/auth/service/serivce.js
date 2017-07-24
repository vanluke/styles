import {ajaxPost} from 'rxjs/observable/dom/ajax';
import config from 'config/config';

export const authService = {
	getToken(user) {
		return ajaxPost(`${config.rootApi}/${config.apiRoutes.token}`, user, {
			'Content-Type': 'application/x-www-form-urlencoded',
		});
	}
};
