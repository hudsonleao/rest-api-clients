const Joi = require('joi');

const headers = {
    headers: Joi.object().keys({
        authorization: Joi.string().required()
    })
};

const schemas = {
    createUsers: Joi.object().keys({
        headers,
        body: Joi.object().keys({
            name: Joi.string().required(),
            user: Joi.string().alphanum().required(),
            password: Joi.string().min(8).required(),
        })
    }),

    getUsers: Joi.object().keys({
        headers
    }),

    getUsersById: Joi.object().keys({
        headers,
        params: Joi.object().keys({
            user_id: Joi.string().guid({ version: 'uuidv4' }).required()
        })
    }),

    updateUsers: Joi.object().keys({
        headers,
        params: Joi.object().keys({
            user_id: Joi.string().guid({ version: 'uuidv4' }).required()
        }),
        body: Joi.object().keys({
            name: Joi.string(),
            user: Joi.string().alphanum(),
            password: Joi.string().min(8),
        })
    }),

    deleteUsers: Joi.object().keys({
        headers,
        params: Joi.object().keys({
            user_id: Joi.string().guid({ version: 'uuidv4' }).required()
        })
    }),
};

module.exports = schemas;