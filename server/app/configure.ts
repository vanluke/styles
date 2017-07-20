import * as mount from 'koa-mount';
import * as json from 'koa-json';
import * as cors from 'koa-cors';
import * as body from 'koa-body';
import routes from '../routes';
import app from './app';
import * as enforceHttps from 'koa-sslify';
import authenticationRules from '../authentication/login';
import secureRoutes from '../authentication/secure.jwt';
import error from '../middleware/error.handler';
import listen from '../middleware/listen';
import {getCert, getKeys} from '../keys';
import {endpoint} from './settings';

app.use(enforceHttps());
app.use(json());
app.use(body());
app.use(cors());
authenticationRules(app);
secureRoutes(app);
app.use(mount(endpoint(), routes.routes()));

error(app);

listen({
	key: getKeys(),
  cert: getCert(),
}, app);
