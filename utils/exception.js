

const { HttpException } = require('../exceptions/HttpException')

const catchError = async (ctx, next) => {
    try {
        await next()
    } catch (error) {
        //已知异常
        if (error instanceof HttpException) {
            ctx.body = {
                msg: error.msg,
                error_code: error.errorCode,
                requeset: `${ctx.method} ${ctx.path}`,

            }
            ctx.status = error.code
        }
    }

}

module.exports = catchError
