const { code, message } = require('../../utils/httpStatusCode');
module.exports = (app) => {
    app.use((err, req, res, next) => {

        const errorCode = err.code || code.INTERNAL_SERVER_ERROR;
        const erroMessage = err.message || message.INTERNAL_SERVER_ERROR;

        res.status(errorCode).json({
            error: err.error,
            entity: err.entity,
            step: err.step,
            message: erroMessage
        });

        app.logger.error(err);
    });
};