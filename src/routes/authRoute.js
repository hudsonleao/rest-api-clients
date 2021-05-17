const validation = require('../middlewares/validationMiddleware');
const authSchemas = require('../schemas/authSchema');

module.exports = (app) => {

    const { controllers: { authController } } = app

    app.post('/auth', validation(authSchemas.authentication), authController.authUser);
}