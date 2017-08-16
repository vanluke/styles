import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {ajax} from 'rxjs/observable/dom/ajax';
import config from 'config/config';
import {request} from 'common/service';

export const tripsService = {
	getTrips() {
		return request({
			path: `${config.apiRoutes.rootApi}/${config.apiRoutes.version}/public/${config.apiRoutes.trips}`
		});
	}
}
