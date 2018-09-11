'use strict'

const Router = require('koa-router')

const bcrypt = require('bcryptjs')

const mongoose = require('mongoose')
const User = mongoose.model('User')

const server = new Router()

module.exports = server.post('/login', async ctx => {
  const { username, password } = ctx.request.body
  const foundUser = await User.findOne({ username })
  if (foundUser != null) {
    const result = await bcrypt.compare(password, foundUser.password)
    console.log(result)
  }
})
