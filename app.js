// 项目入口
const Koa = require('koa');
const bodyParser = require('koa-body');
const cors = require('koa-cors');
const logger = require('koa-logger');
const { router } = require('./src/router');
// 创建Koa实例
const app = new Koa();
// 中间件
app.use(bodyParser());
app.use(logger());
app.use(require('koa-static')(__dirname, './src/public'));
app.use(cors());
// 引入路由
app.use(router.routes());

// 监听3000端口
app.listen(3000, () => {
	console.log('server is running at http://localhost:3000');
});