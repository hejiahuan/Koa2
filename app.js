const Koa = require('koa')
const views = require('koa-views')
const co = require('co')
const convert = require('koa-convert')
const json = require('koa-json')
const koaBody = require('koa-body');
const onerror = require('koa-onerror')
const logger = require('koa-logger')
const debug = require('debug')('koa2:server')
const path = require('path')

const config = require('./config')

const catchError = require('./utils/exception')
const router = require('./routes')
const app = new Koa()

app.use(catchError)




const port = process.env.PORT || config.port

// 使用ctx.body解析中间件

// middlewares
app.use(koaBody({ multipart: true }))

app.use(json())
  .use(logger())
  .use(require('koa-static')(__dirname + '/public'))
  .use(views(path.join(__dirname, '/views'), {
    options: { settings: { views: path.join(__dirname, 'views') } },
    map: { 'njk': 'nunjucks' },
    extension: 'njk'
  }))

app.use(router.routes())
app.use(router.allowedMethods())

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - $ms`)
})




/**
 *导入Model类 
 */
require("./models/User")

module.exports = app.listen(config.port, () => {
  console.log(`Listening on http://localhost:${config.port}`)
})
