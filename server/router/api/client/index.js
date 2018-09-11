'use strict'

const Router = require('koa-router')
const bcrypt = require('bcryptjs')
const R = require('ramda')

const mongoose = require('mongoose')
const User = mongoose.model('User')

const client = new Router()

client.post('/auth', async ctx => {
  const { username, password } = ctx.request.body
  const totpToken = R.defaultTo(null, ctx.request.body.totpToken)
  const foundUser = await User.findOne({ username })
  if (foundUser === null) {
    ctx.response.body = 'AUTH_FAILED'
    return
  }
  const passwordMatch = await bcrypt.compare(password, foundUser.password)
  if (!passwordMatch) {
    ctx.response.body = 'AUTH_FAILED'
    return
  }
  if (foundUser.TOTP.key) {
    if (!totpToken) {
      ctx.response.body = 'TOTP_REQUIRED'
      return
    }
    if (totpToken) {
      // check token
      ctx.response.body = 'TOKEN_MISMATCH'
      return
    }
  }

  console.log('matched!')
})

module.exports = client
