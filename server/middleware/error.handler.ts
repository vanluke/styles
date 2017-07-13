import * as Koa from 'koa';

const errorHandler = async function errorHandler(ctx: any, next: any) {
  try {
    await next();
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.body = err.message;
    throw err;
  }
};


export default function (app: Koa) {
  app.use(errorHandler);
}
