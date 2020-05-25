const { LinValidator,Rule } = require("../utils/lin-validator")

/**
 * 正整型的校验
 */
class IntegerValidator extends LinValidator {
    constructor(){
        super()
        this.id = [
            new Rule('isInt','需要是正整数',{min:1})
        ]
    }
}

module.exports={
    IntegerValidator
}