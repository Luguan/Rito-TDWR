const Router = require('koa-router');
const getApiInstanceForRegion = require('../leagueApi/getApiInstanceForRegion');

const router = new Router();

router.get('/summoner/:region/:name', ctx => {
  const region = ctx.params.region;
  const riotApi = getApiInstanceForRegion(region);

  if (!riotApi) {
    ctx.throw(400, `Invalid region "${region}"`);
  }

  ctx.body = {a: 1};
});

module.exports = router;
