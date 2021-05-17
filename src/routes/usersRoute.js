module.exports = (app) => {

    const { controllers: { usersController } } = app

    app.post('/users', usersController.createUsers);
    app.get('/users', usersController.getUsers);
    app.get('/users/:user_id', usersController.getUsersById);
    app.put('/users/:user_id', usersController.updateUsers);
    app.delete('/users/:user_id', usersController.deleteUsers);
}