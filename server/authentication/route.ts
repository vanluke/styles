import {Context} from 'koa';
import * as co from 'co-body';
import {
	createToken,
	authUser,
	createUser,
} from './authentication.service';
import {constructResponse} from '../middleware/response';
import {endpoint} from '../app/settings';
import {loginValidate, sigupValidate} from './authentication.validator';

export const handleNext = (next: Function, ctx: Context) =>
	next().catch(err => err
			&& ctx.throw(err.status, 'Protected resource, use Authorization header to get access\n'));

export async function loginRoute(ctx: any, next: any) {
  if (ctx.url.match(/^\/api\/login/)) {
		const claims = ctx.request.body;
		const validatationResult = await loginValidate(claims);
		if (!validatationResult.isValid) {
			return constructResponse(422)(ctx, {validatationResult});
		}
		const user = await authUser(claims);
		if (user) {
			const token = await createToken(claims);
			return constructResponse(200)(ctx, {token});
		}
		return constructResponse(404)(ctx, {validatationResult: {
			isValid: false,
			validatationResult: [
				{message: 'Incorrect Password or username!'},
			]}});
	}
	return handleNext(next, ctx);
}

export async function signUpRoute(ctx: any, next: any) {
  if (ctx.url.match(/^\/api\/signup/)) {
		const claims = ctx.request.body;
		const validatationResult = await sigupValidate(claims);
		if (!validatationResult.isValid) {
			return constructResponse(422)(ctx, {validatationResult})
		}
		await createUser({
			...claims,
			createdAt: new Date(),
			group: 1,
		});
		const token = await createToken(claims);
		return constructResponse(200)(ctx, {token});
	}
	return handleNext(next, ctx);
}
