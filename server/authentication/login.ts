import {loginRoute, signUpRoute} from '../authentication/route';

export default function (app: any) {
	app.use(loginRoute);
	app.use(signUpRoute);
}
