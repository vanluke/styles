import routes from './router';
import {
	createTrip,
	updateTrip,
	deleteTrip,
	getTrips,
} from '../trips/route';

routes.get('/hello', async (ctx: any) => {
  ctx.response.body = 'Hello Word';
  ctx.response.status = 201;
});

routes.post('/trips', createTrip);
routes.put('/trips/:id', updateTrip);
routes.delete('/trips/:id', deleteTrip);
routes.get('/trips/:id?', getTrips);

export default routes;
