import routes from './router';

routes.get('/hello', async (ctx: any) => {
  ctx.response.body = 'Hello Word';
  ctx.response.status = 201;
});

export default routes;
