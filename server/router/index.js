'use strict'

const Router = require('koa-router')

const pages = require('./pages')
const api = require('./api')

module.exports = app => {
  const router = new Router()

  const pagesRoutes = pages(app)
  router
    .use('/api', api.routes(), api.allowedMethods())
    .use('*', pagesRoutes.routes(), pagesRoutes.allowedMethods())

  return router
}
