const validation = require('../middlewares/validationMiddleware');
const usersSchema = require('../schemas/usersSchema');
module.exports = (app) => {

    const { controllers: { usersController } } = app;

    app.post('/users', validation(usersSchema.createUsers), usersController.createUsers);
    app.get('/users', validation(usersSchema.getUsers), usersController.getUsers);
    app.get('/users/:user_id', validation(usersSchema.getUsersById), usersController.getUsersById);
    app.put('/users/:user_id', validation(usersSchema.updateUsers), usersController.updateUsers);
    app.delete('/users/:user_id', validation(usersSchema.deleteUsers), usersController.deleteUsers);
};