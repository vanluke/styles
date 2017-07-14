import {Context} from 'koa';

export const constructResponse = code => (ctx: Context, body: any) => {
  ctx.response.status = code;
  ctx.response.body = { ...body };
  return ctx;
};
