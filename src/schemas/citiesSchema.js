const Joi = require('joi');
const enumStates = require('../../utils/enumStates');
const validStates = Object.values(enumStates);

const headers = Joi.object().keys({
    authorization: Joi.string().required()
});

const schemas = {
    createCities: Joi.object().keys({
        headers,
        body: Joi.object().keys({
            name: Joi.string().required(),
            state: Joi.string().valid(...validStates).required(),
        })
    }),

    getCities: Joi.object().keys({
        headers
    }),

    getCitiesById: Joi.object().keys({
        headers,
        params: Joi.object().keys({
            city_id: Joi.string().guid({ version: 'uuidv4' }).required()
        })
    }),

    updateCities: Joi.object().keys({
        headers,
        params: Joi.object().keys({
            city_id: Joi.string().guid({ version: 'uuidv4' }).required()
        }),
        body: Joi.object().keys({
            name: Joi.string(),
            state: Joi.string().valid(...validStates),
        })
    }),

    deleteCities: Joi.object().keys({
        headers,
        params: Joi.object().keys({
            city_id: Joi.string().guid({ version: 'uuidv4' }).required()
        })
    }),
};

module.exports = schemas;