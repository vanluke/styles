import {Context} from 'koa';
import * as co from 'co-body';
import {
	createToken,
	authUser,
	createUser,
} from './authentication.service';
import {constructResponse} from '../middleware/response';
import {endpoint} from '../app/settings';

export const handleNext = (next: Function, ctx: Context) =>
	next().catch(err => err
			&& ctx.throw(err.status, 'Protected resource, use Authorization header to get access\n'));

export async function loginRoute(ctx: any, next: any) {
  if (ctx.url.match(/^\/api\/login/)) {
		const claims = ctx.request.body;
		const user = await authUser(claims);
		if (user) {
			const token = await createToken(claims);
			return constructResponse(200)(ctx, {token});
		}
		return constructResponse(404)(ctx, {error: 'User not found'});
	}
	return handleNext(next, ctx);
}

export async function signUpRoute(ctx: any, next: any) {
  if (ctx.url.match(/^\/api\/signup/)) {
    const claims = ctx.request.body;
		const user = await createUser(claims);
		return constructResponse(404)(ctx, {user})
	}
	return handleNext(next, ctx);
}
