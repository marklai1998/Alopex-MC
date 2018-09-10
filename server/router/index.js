'use strict'

const Router = require('koa-router')

const pages = require('./pages')
const api = require('./api')

module.exports = app => {
  const router = new Router()

  router.use('/api', api.routes(), api.allowedMethods())

  const pagesRoutes = pages(app)
  router.use('*', pagesRoutes.routes(), pagesRoutes.allowedMethods())

  return router
}
