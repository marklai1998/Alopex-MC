'use strict'

const Router = require('koa-router')

const login = require('./login')
const dashboard = require('./dashboard')
const settings = require('./settings')

module.exports = app => {
  const handle = app.getRequestHandler()
  const pages = new Router()

  const loginRoutes = login(app)
  pages.use('/login', loginRoutes.routes(), loginRoutes.allowedMethods())

  const dashboardRoutes = dashboard(app)
  pages.use('/', dashboardRoutes.routes(), dashboardRoutes.allowedMethods())

  const settingsRoutes = settings(app)
  pages.use(
    '/settings',
    settingsRoutes.routes(),
    settingsRoutes.allowedMethods()
  )

  pages.get('*', async ctx => {
    await handle(ctx.req, ctx.res)
    ctx.respond = false
  })

  return pages
}
