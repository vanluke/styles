import routes from './router';
import {
	createTrip,
	updateTrip,
	deleteTrip,
	getTrips,
} from '../trips/route';
import {TripValidator} from '../trips/trip-validators';

routes.get('/hello', async (ctx: any) => {
  ctx.response.body = 'Hello Word';
  ctx.response.status = 201;
});

routes.post('/trips', TripValidator, createTrip);
routes.put('/trips/:id', TripValidator, updateTrip);
routes.delete('/trips/:id', deleteTrip);
routes.get('/trips/:id?', getTrips);

export default routes;
