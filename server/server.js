// @flow strict

/* eslint-disable fp/no-mutation */
const Koa = require('koa')
const nextjs = require('next')
const Router = require('koa-router')
const R = require('ramda')

const port = R.defaultTo('3000', process.env.PORT)
const dev = process.env.NODE_ENV !== 'production'
const app = nextjs({ dev, dir: './src' })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = new Koa()
  const router = new Router()

  router.get('/', async ctx => {
    ctx.redirect('/dashboard')
  })

  router.get('*', async ctx => {
    await handle(ctx.req, ctx.res)
    ctx.respond = false
  })

  server.use(async (ctx, next) => {
    ctx.res.statusCode = 200
    await next()
  })

  server.use(router.routes())
  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`)
  })
})

/* eslint-enable */
