const { code: { OK } } = require('../../utils/httpStatusCode');

module.exports = ({ services: { authService } }) => {

    return {
        authUser: async (req, res, next) => {
            try {
                /*
            #swagger.parameters['users'] = {
            in: 'body',
            description: 'Authentication',
            schema: {
            user: 'hudson',
            password: 'gd2D2@cjwcvneSMs2Sc_ew',
            }
            }*/
                const { body } = req;
                const response = await authService.authentication(body);
                res.status(OK).json({ data: response });
            } catch (error) {
                next(error);
            }
        }
    };
};