

const { HttpException } = require('../exceptions/HttpException')

const catchError = async (ctx, next) => {
    try {
        await next()
    } catch (error) {
        //开发环境
        // 开发环境要打开 throw error
        //生产环境
        // throw error

        //已知异常
        if (error instanceof HttpException) {
            ctx.body = {
                msg: error.msg,
                error_code: error.errorCode,
                requeset: `${ctx.method} ${ctx.path}`,

            }
            ctx.status = error.code
            //处理未知异常
        }else{
            ctx.body={
                msg:"出错啦！！！！",
                error_code:999,
                requeset:`${ctx.method} ${ctx.path}`
            }
            ctx.status=500
        }   
    }

}

module.exports = catchError
