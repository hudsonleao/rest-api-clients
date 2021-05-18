const { code: { OK, CREATED } } = require('../../utils/httpStatusCode');

module.exports = ({ services: { clientsService } }) => {

    return {
        getClients: async (req, res, next) => {
            try {
                const { query } = req;
                const response = await clientsService.get(query);
                res.status(OK).json({ data: response });
            } catch (error) {
                next(error);
            }
        },

        getClientsById: async (req, res, next) => {
            try {
                const { params: { client_id } } = req;
                const response = await clientsService.get({ _id: client_id });
                res.status(OK).json({ data: response });
            } catch (error) {
                next(error);
            }
        },

        createClients: async (req, res, next) => {
            try {
                const { body, headers: { subject } } = req;
                const response = await clientsService.create({ ...body, subject });
                res.status(CREATED).json({ data: response });
            } catch (error) {
                next(error);
            }
        },

        updateClients: async (req, res, next) => {
            try {
                const { body, params: { client_id }, headers: { subject } } = req;
                const response = await clientsService.update({ ...body, updated_by: subject }, { _id: client_id });
                res.status(OK).json({ data: response });
            } catch (error) {
                next(error);
            }
        },

        deleteClients: async (req, res, next) => {
            try {
                const { params: { client_id }, headers: { subject } } = req;
                const response = await clientsService.delete({ updated_by: subject }, { _id: client_id });
                res.status(OK).json({ data: response });
            } catch (error) {
                next(error);
            }
        }
    };
};