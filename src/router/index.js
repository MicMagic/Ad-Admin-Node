// 路由管理
const KoaRouter = require('koa-router');

const router = new KoaRouter();

router.get('/', async (ctx) => {
	ctx.body = 'koa2 string';
});

module.exports = router;