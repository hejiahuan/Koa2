const Router = require("koa-router")

const router = new Router()

const { HttpException, ParamException } = require('../exceptions/HttpException')

router.get("/", async (ctx, next) => {
    ctx.body = "我是User"
})

router.post("/dd", ctx => {
    //    const error=new HttpException("我日你妈！！！",1002,500)
    aaa
    const error = new ParamException()
    // const error = global.errs.ParamException()
    throw error
})

module.exports = router;