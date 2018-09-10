'use strict'

const bcrypt = require('bcryptjs')
const mongoose = require('mongoose')

const User = mongoose.model('User')

module.exports = async () => {
  const root = await User.findOne({ username: 'root' })
  if (root === null) {
    console.log('> Creating root account')
    const password = await bcrypt.hash('root', 10)
    await User.create({
      username: 'root',
      password: password
    })
  }
}
