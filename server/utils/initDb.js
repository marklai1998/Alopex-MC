'use strict'

require('../models/user')

const mongoose = require('mongoose')
const User = mongoose.model('User')

module.exports = () => {
  User.findOne({ username: 'root' }).then(result => {
    if (result === null) {
      console.log('> Creating root account')
      User.create({ username: 'root', password: 'root' })
    }
  })
}
