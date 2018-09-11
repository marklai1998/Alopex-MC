'use strict'

const Router = require('koa-router')

const client = require('./client')
const server = require('./server')

const api = new Router()

module.exports = api
  .use('/client', client.routes(), client.allowedMethods())
  .use('/server', server.routes(), server.allowedMethods())
