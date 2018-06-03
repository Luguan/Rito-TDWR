const Koa = require('koa');
const bodyParser = require('koa-bodyparser');

const createRouter = require('./routes/index');

const app = new Koa();
const router = createRouter();

app
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods());

const port = process.env.PORT || 3000;
app.listen(port);
console.log(`Server listening on port ${port}`);
