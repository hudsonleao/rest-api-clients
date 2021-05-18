const Joi = require('joi');
const schemas = {
    authentication: Joi.object().keys({
        body: Joi.object().keys({
            user: Joi.string().alphanum().required(),
            password: Joi.string().min(8).required(),
        })
    })
};

module.exports = schemas;