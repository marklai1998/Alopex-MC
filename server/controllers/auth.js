'use strict'

const bcrypt = require('bcryptjs')
const mongoose = require('mongoose')
const R = require('ramda')
const User = mongoose.model('User')

module.exports = {
  login: async ctx => {
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
  }
}
