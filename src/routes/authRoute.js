module.exports = (app) => {

    const { controllers: { authController } } = app

    app.post('/auth', authController.authUser);
}