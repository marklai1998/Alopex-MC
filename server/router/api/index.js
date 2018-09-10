'use strict'

const Router = require('koa-router')

const api = new Router()

module.exports = api.post('/login', async ctx => {
  console.log(ctx.request.body)
})
