const fs = require('fs')
const path = require('path')

const Vue = require('vue')
const {createRenderer, createBundleRenderer} = require('vue-server-renderer')
const template = fs.readFileSync(path.resolve(__dirname, '../src/index.template.html'), 'utf-8')
// templateRenderer
const templateRenderer = createRenderer({template})
// bundle renderer
const serverBundle = require(path.resolve(__dirname, '../assets/server/vue-ssr-server-bundle.json'))
const clientManifest = require(path.resolve(__dirname, '../assets/client/vue-ssr-client-manifest.json'))
const bundleRenderer = createBundleRenderer(serverBundle, {template, clientManifest})

const createApp = require('../assets/server/main').default

module.exports = async (ctx, next) => {
  const url = ctx.url
    , {app, state} = await createApp(ctx)
    , script = `
                  <script src="//localhost:3000/vendors~main.js"></script>
                  <script src="//localhost:3000/main.js"></script>
                `
    , context = {title: url, script, state}

  await templateRenderer.renderToString(app, context)
    .then((html) => {
      /*console.log('Template successfully rendered.')*/
      ctx.body = html
    })
    .catch((err) => {
      console.error(err)
      ctx.status = 500
      ctx.body = 'Internal Server Error'
    })

  /**
   * Vue router 暂时存在 dynamic import 时，对 window 等变量的访问 bug
   */
  /*await bundleRenderer.renderToString(context)
    .then((html) => {
      ctx.body = html
    })
    .catch((err) => {
      console.error(err)
      ctx.status = 500
      ctx.body = 'Internal Server Error'
    })*/

  return next()
}
