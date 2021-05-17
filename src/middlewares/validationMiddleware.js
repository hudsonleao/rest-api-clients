const { BAD_REQUEST } = require('../../utils/errorsHandling');
const middleware = (schema) => {
    return (req, _, next) => {
        const { error } = schema.validate(req, {
            stripUnknown: true,
            allowUnknown: true
        });

        if (!error) return next();

        const { details } = error;
        const message = details.map(i => i.message).join(',');
        BAD_REQUEST(message, 'validationMiddleware')
    }
}
module.exports = middleware;