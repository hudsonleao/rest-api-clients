const Joi = require('joi');
const enumStates = require('../../utils/enumStates');
const validStates = Object.values(enumStates);

const headers = {
    headers: Joi.object().keys({
        authorization: Joi.string().required()
    })
}

const schemas = {
    createClients: Joi.object().keys({
        headers,
        body: Joi.object().keys({
            name: Joi.string().required(),
            gender: Joi.string().valid('M', 'F').required(),
            dateOfBirth: Joi.date().required(),
            city: Joi.string().required(),
            state: Joi.string().valid(...validStates).required()
        })
    }),

    getClients: Joi.object().keys({
        headers
    }),

    getClientsById: Joi.object().keys({
        headers,
        params: Joi.object().keys({
            client_id: Joi.string().guid({ version: 'uuidv4' }).required()
        })
    }),

    updateClients: Joi.object().keys({
        headers,
        params: Joi.object().keys({
            client_id: Joi.string().guid({ version: 'uuidv4' }).required()
        }),
        body: Joi.object().keys({
            name: Joi.string(),
            gender: Joi.string().valid('M', 'F'),
            dateOfBirth: Joi.date(),
            city: Joi.string(),
            state: Joi.string().valid(...validStates)
        })
    }),

    deleteClients: Joi.object().keys({
        headers,
        params: Joi.object().keys({
            client_id: Joi.string().guid({ version: 'uuidv4' }).required()
        })
    }),
};

module.exports = schemas;