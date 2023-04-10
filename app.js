// 项目入口
const Koa = require('koa');
const bodyParser = require('koa-body');
const cors = require('koa-cors');
// 创建Koa实例
const app = new Koa();
app.use(bodyParser());
app.use(cors());

// 监听3000端口
app.listen(3000, () => {
	console.log('server is running at http://localhost:3000');
});