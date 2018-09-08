const Router = require('koa-router')

module.exports = app => {
  const settings = new Router()

  settings.get('/', async ctx => {
    await app.render(ctx.req, ctx.res, '/dashboard', ctx.query)
    ctx.respond = false
  })

  return settings
}
