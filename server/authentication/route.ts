import * as co from 'co-body';
import {createToken} from './authentication.service';
import {constructResponse} from '../middleware/response';

export async function loginRoute(ctx: any, next: any) {
  if (!ctx.url.match(/^\/api\/login/)) {
    return await next();
	}
	const claims = await co(ctx);
  const token = await createToken(claims);
  return constructResponse(200)(ctx, {token});
}
