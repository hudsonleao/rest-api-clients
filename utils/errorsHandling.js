const httpStatusCode = require('./httpStatusCode');
module.exports = {
    BAD_REQUEST: (error, entity, step) => {
        throw ({
            code: httpStatusCode.code.BAD_REQUEST,
            error,
            entity,
            step,
            message: httpStatusCode.message.BAD_REQUEST,
        })
    },
    UNAUTHORIZED: (error, entity, step) => {
        throw ({
            code: httpStatusCode.code.UNAUTHORIZED,
            error,
            entity,
            step,
            message: httpStatusCode.message.UNAUTHORIZED,
        })
    },
    NOT_FOUND: (error, entity, step) => {
        throw ({
            code: httpStatusCode.code.NOT_FOUND,
            error,
            entity,
            step,
            message: httpStatusCode.message.NOT_FOUND,
        })
    },
    UNPROCESSABLE_ENTITY: (error, entity, step) => {
        throw ({
            code: httpStatusCode.code.UNPROCESSABLE_ENTITY,
            error,
            entity,
            step,
            message: httpStatusCode.message.UNPROCESSABLE_ENTITY,
        })
    },
    INTERNAL_SERVER_ERROR: (error, entity, step) => {
        throw ({
            code: httpStatusCode.code.INTERNAL_SERVER_ERROR,
            error,
            entity,
            step,
            message: httpStatusCode.message.INTERNAL_SERVER_ERROR,
        })
    }
    
}