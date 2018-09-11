'use strict'

const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, index: true },
    password: { type: String, required: true },
    TOTP: {
      force: { type: Boolean, required: true },
      key: { type: String }
    }
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt'
    }
  }
)

mongoose.model('User', userSchema)
