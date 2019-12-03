const Koa = require('koa');
const KoaRouter = require('koa-router');
const json = require('koa-json');
const path = require('path');
const render = require('koa-ejs');
const bodyParser = require('koa-bodyparser');

const app = new Koa();
const router = new KoaRouter();

app.use(json());
app.use(bodyParser());

//Array to store hard coded data for an example
const places =['The Point', 'Market Square', 'Point Park University'];

//app.use(async ctx => (ctx.body ={ msg:'Lets Go Pens'}));

render(app, {
  root: path.join(__dirname, 'views'),
  layout: 'layout',
  viewExt: 'html',
  cache: false,
  debug: false
});

//routes
router.get('/', index);
router.get('/Add', showAdd);
router.post('/add', add);

//List of items
async function index(ctx) {
  await ctx.render('index', {
    title: 'Cool places in Pittsburgh',
    things: places
  });
}

/*
  router.get('/', async ctx => {
  await ctx.render('index', {
    title:'Cool places on campus',
    things: places
  });
});
*/

//Show Add function
async function showAdd(ctx) {
  await ctx.render('add');
}

async function add(ctx) {
  const body = ctx.request.body;
  things.push(body.thing);
  ctx.redirect('/');
}

router.get('/pittsburgh', ctx => (ctx.body = 'Lets Go Beechview'));

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => console.log('Server started...'));
