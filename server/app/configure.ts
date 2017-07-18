import * as mount from 'koa-mount';
import * as json from 'koa-json';
import * as cors from 'koa-cors';
import * as body from 'koa-body';
import routes from '../routes';
import app from './app';
import * as enforceHttps from 'koa-sslify';
import secure from '../authentication/login';
import config from '../config/app-config';
import error from '../middleware/error.handler';
import listen from '../middleware/listen';
import {getCert, getKeys} from '../keys';

const version = config.get('version');
const endpoint = `/api/v${version}`;

app.use(enforceHttps());
app.use(json());
app.use(body());
app.use(cors());
secure(app);
app.use(mount(endpoint, routes.routes()));

error(app);

listen({
	key: getKeys(),
  cert: getCert(),
}, app);
