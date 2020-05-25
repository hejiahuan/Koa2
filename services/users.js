const Router = require("koa-router")

const router = new Router()

const { HttpException, ParamException } = require('../exceptions/HttpException')

//导入参数校验器
const {IntegerValidator} =require("../validators/validator")

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

router.post("/insert/:id",(ctx,next)=>{
    //假如我们校验id必须是正整型
    const v=new IntegerValidator().validate(ctx)
})

module.exports = router;