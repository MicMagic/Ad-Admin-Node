// 项目入口
require('./src/alias');
const Koa = require('koa');
const { koaBody } = require('koa-body');
const cors = require('koa-cors');
const logger = require('koa-logger');

const index = require('./src/router/index');
// 创建Koa实例
const app = new Koa();
// 中间件
app.use(koaBody());
app.use(logger());
app.use(require('koa-static')(__dirname, '@public'));
app.use(cors());
// 引入路由
app.use(index.routes(), index.allowedMethods());

// 监听3000端口
app.listen(3000, () => {
	console.log('server is running at http://localhost:3000');
});