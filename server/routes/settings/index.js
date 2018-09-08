const Router = require('koa-router')

module.exports = app => {
  const settings = new Router()

  settings.get('/', async ctx => {
    // TODO: add default tab
    ctx.respond = false
  })

  settings.get('/about', async ctx => {
    await app.render(ctx.req, ctx.res, '/about', ctx.query)
    ctx.respond = false
  })

  return settings
}
