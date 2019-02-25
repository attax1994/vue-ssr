module.exports = async ({response}, next) => {
  response.set('Content-Type', 'text/html;charset=UTF-8')
  await next()
}