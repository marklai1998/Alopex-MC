'use strict'

const Router = require('koa-router')

module.exports = app => {
  const login = new Router()

  login.get('/', async ctx => {
    await app.render(ctx.req, ctx.res, '/login', ctx.query)
    ctx.respond = false
  })

  return login
}
