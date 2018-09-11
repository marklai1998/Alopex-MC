'use strict'

const Router = require('koa-router')

const authController = require('../../../controllers/auth')

const client = new Router()

module.exports = client.post('/auth', authController.login)
