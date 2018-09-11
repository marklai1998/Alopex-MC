'use strict'

const Router = require('koa-router')

const client = require('./client')
const server = require('./server')

const api = new Router()

api.use('/client', client.routes(), client.allowedMethods())

api.use('/server', server.routes(), server.allowedMethods())

module.exports = api
