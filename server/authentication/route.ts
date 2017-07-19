import * as co from 'co-body';
import {
	createToken,
	authUser,
	createUser,
} from './authentication.service';
import {constructResponse} from '../middleware/response';

export async function loginRoute(ctx: any, next: any) {
  if (!ctx.url.match(/^\/api\/login/)) {
    return await next();
	}
	const claims = ctx.request.body;
	const user = await authUser(claims);
	if (user) {
		const token = await createToken(claims);
		return constructResponse(200)(ctx, {token});
	}
	return constructResponse(404)(ctx, {error: 'User not found'});
}

export async function signUpRoute(ctx: any, next: any) {
  if (!ctx.url.match(/^\/api\/signup/)) {
    return await next();
	}
	const claims = ctx.request.body;
	const user = await createUser(claims);
	return constructResponse(404)(ctx, {user})
}
