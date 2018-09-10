'use strict'

const Koa = require('koa')
const nextjs = require('next')
const dev = process.env.NODE_ENV !== 'production'
const app = nextjs({ dev, dir: './src' })
const R = require('ramda')
const mongoose = require('mongoose')
var URI = require('urijs')
const bodyParser = require('koa-bodyparser')
const config = require('../alopex.config.json')

require('./models/user')

const routes = require('./router')
const initDb = require('./utils/initDb')

app.prepare().then(() => {
  const server = new Koa()
  const router = routes(app)
  const serverPort = R.defaultTo('3000', config.server.port)

  const dbConfig = config.database
  const dbName = R.defaultTo('alopex', dbConfig.database)
  const dbUrl = new URI({
    protocol: 'mongodb',
    username: R.defaultTo('', dbConfig.username),
    password: R.defaultTo('', dbConfig.password),
    hostname: R.defaultTo('localhost', dbConfig.host),
    port: R.defaultTo('27017', dbConfig.port),
    path: `/${dbName}`
  }).href()

  mongoose.set('useCreateIndex', true)
  mongoose
    .connect(
      dbUrl,
      { useNewUrlParser: true }
    )
    .then(
      () => {
        console.log(`> Connected database on ${dbUrl}`)
        initDb()
      },
      err => {
        console.log(`cannot create connection to database, error: ${err}`)
      }
    )

  server.use(bodyParser())

  server.use(async (ctx, next) => {
    ctx.res.statusCode = 200
    await next()
  })

  server.use(router.routes()).use(router.allowedMethods())

  server.listen(serverPort, () => {
    console.log(`> Ready on http://localhost:${serverPort}`)
  })
})
