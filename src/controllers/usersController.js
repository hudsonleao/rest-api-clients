const { code: { OK, CREATED } } = require('../../utils/httpStatusCode');

module.exports = ({ services: { usersService } }) => {

    return {
        getUsers: async (req, res, next) => {
            try {
                const { query } = req;
                const response = await usersService.get(query);
                res.status(OK).json({ data: response });
            } catch (error) {
                next(error);
            }
        },

        getUsersById: async (req, res, next) => {
            try {
                const { params: { user_id } } = req;
                const response = await usersService.get({ _id: user_id });
                res.status(OK).json({ data: response });
            } catch (error) {
                next(error);
            }
        },

        createUsers: async (req, res, next) => {
            try {
                const { body, headers: { subject } } = req;
                const response = await usersService.create({ ...body, subject });
                res.status(CREATED).json({ data: response });
            } catch (error) {
                next(error);
            }
        },

        updateUsers: async (req, res, next) => {
            try {
                const { body, params: { user_id }, headers: { subject } } = req;
                const response = await usersService.update({ ...body, updated_by: subject }, { _id: user_id });
                res.status(OK).json({ data: response });
            } catch (error) {
                next(error);
            }
        },

        deleteUsers: async (req, res, next) => {
            try {
                const { params: { user_id }, headers: { subject } } = req;
                const response = await usersService.delete({ updated_by: subject }, { _id: user_id });
                res.status(OK).json({ data: response });
            } catch (error) {
                next(error);
            }
        }
    };
};