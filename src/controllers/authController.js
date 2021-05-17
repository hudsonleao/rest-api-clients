const { code: { OK } } = require("../../utils/httpStatusCode");

module.exports = ({ services: { authService } }) => {

    return {
        authUser: async (req, res, next) => {
            try {
                const { body } = req
                const response = await authService.authentication(body);
                res.status(OK).json({ data: response })
            } catch (error) {
                next(error)
            }
        }
    }
}