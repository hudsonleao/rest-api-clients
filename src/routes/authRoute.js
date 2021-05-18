const validation = require('../middlewares/validationMiddleware');
const authSchemas = require('../schemas/authSchema');

module.exports = (app) => {

    const { controllers: { authController } } = app;
    app.post('/auth', validation(authSchemas.authentication), authController.authUser, () => {
        /*
        #swagger.parameters['users'] = {
            in: 'body',
            description: 'Any description...',
            schema: {
                user: 'Jhon Doe',
                password: 'adasdasd',
            }
    }*/
    });
};