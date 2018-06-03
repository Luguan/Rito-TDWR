const Router = require('koa-router');
const stats = require('./stats');

module.exports = () => {
  const router = new Router();

  router.use('/stats', stats.routes());

  return router;
};
