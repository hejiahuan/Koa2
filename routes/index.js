const Router =require("koa-router")
let router= new Router();

const user=require('../services/users')


/**
 * 这个就相当于我们Vue中的router/index.js
 * 默认跳转到哪个页面，
 * 然后配置路由
 */
router.get("/",async ctx=>{
  ctx.redirect("/users")
})

router.use('/users',user.routes())

module.exports= router
