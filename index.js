const Koa = require('koa');
const server = new Koa()


// 拦截静态资源
server.use(require('./middleware/static.middleware'))
// 设置header
server.use(require('./middleware/header.middleware'))
// Vue渲染
server.use(require('./middleware/renderer.middleware'))

server.listen(3000)





