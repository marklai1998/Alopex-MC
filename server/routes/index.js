const Router = require('koa-router')
const login = require('./login')
const dashboard = require('./dashboard')
const settings = require('./settings')

module.exports = app => {
  const handle = app.getRequestHandler()
  const router = new Router()

  router.get('/', async ctx => {
    ctx.redirect('/dashboard')
  })

  const loginRoutes = login(app)
  router.use('/login', loginRoutes.routes(), loginRoutes.allowedMethods())

  const dashboardRoutes = dashboard(app)
  router.use(
    '/dashboard',
    dashboardRoutes.routes(),
    dashboardRoutes.allowedMethods()
  )

  const settingsRoutes = settings(app)
  router.use(
    '/settings',
    settingsRoutes.routes(),
    settingsRoutes.allowedMethods()
  )

  router.get('*', async ctx => {
    await handle(ctx.req, ctx.res)
    ctx.respond = false
  })

  return router
}
