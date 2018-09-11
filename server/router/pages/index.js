'use strict'

const Router = require('koa-router')

const login = require('./login')
const dashboard = require('./dashboard')
const settings = require('./settings')

module.exports = app => {
  const handle = app.getRequestHandler()
  const pages = new Router()

  const loginRoutes = login(app)
  const dashboardRoutes = dashboard(app)
  const settingsRoutes = settings(app)
  pages
    .use('/login', loginRoutes.routes(), loginRoutes.allowedMethods())
    .use('/settings', settingsRoutes.routes(), settingsRoutes.allowedMethods())
    .use('/', dashboardRoutes.routes(), dashboardRoutes.allowedMethods())
    .get('*', async ctx => {
      await handle(ctx.req, ctx.res)
      ctx.respond = false
    })

  return pages
}
