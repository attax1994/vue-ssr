const fs = require('fs')
const path = require('path')

module.exports = async (ctx, next) => {
  const {url} = ctx
  if ((ctx.method === 'HEAD' || ctx.method === 'GET') && /\.(js|css)$/.test(url)) {
    const fileName = url.split('/').splice(-1).toString()
    ctx.body = fs.readFileSync(path.join(__dirname, '../assets/client', fileName), 'UTF-8')
    return
  }

  await next()
}