const { code: { OK, CREATED } } = require('../../utils/httpStatusCode');

module.exports = ({ services: { citiesService } }) => {

    return {
        getCities: async (req, res, next) => {
            try {
                const { query } = req;
                const response = await citiesService.get(query);
                res.status(OK).json({ data: response });
            } catch (error) {
                next(error);
            }
        },

        getCitiesById: async (req, res, next) => {
            try {
                const { params: { city_id } } = req;
                const response = await citiesService.get({ _id: city_id });
                res.status(OK).json({ data: response });
            } catch (error) {
                next(error);
            }
        },

        createCities: async (req, res, next) => {
            try {
                const { body, headers: { subject } } = req;
                const response = await citiesService.create({ ...body, subject });
                res.status(CREATED).json({ data: response });
            } catch (error) {
                next(error);
            }
        },

        updateCities: async (req, res, next) => {
            try {
                const { body, params: { city_id }, headers: { subject } } = req;
                const response = await citiesService.update({ ...body, updated_by: subject }, { _id: city_id });
                res.status(OK).json({ data: response });
            } catch (error) {
                next(error);
            }
        },

        deleteCities: async (req, res, next) => {
            try {
                const { params: { city_id }, headers: { subject } } = req;
                const response = await citiesService.delete({ updated_by: subject }, { _id: city_id });
                res.status(OK).json({ data: response });
            } catch (error) {
                next(error);
            }
        }
    };
};