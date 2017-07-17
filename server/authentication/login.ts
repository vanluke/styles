import {loginRoute, signUpRoute} from '../authentication/route';
import {jwtConfig} from '../authentication/authentication.service';

export default function (app: any) {
	app.use(loginRoute);
	app.use(signUpRoute);
  app.use(jwtConfig);
}
