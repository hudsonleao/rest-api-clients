const validation = require('../middlewares/validationMiddleware');
const clientsSchema = require('../schemas/clientsSchema');
module.exports = (app) => {

    const { controllers: { clientsController } } = app

    app.post('/clients', validation(clientsSchema.createClients), clientsController.createClients);
    app.get('/clients', validation(clientsSchema.getClients), clientsController.getClients);
    app.get('/clients/:client_id', validation(clientsSchema.getClientsById), clientsController.getClientsById);
    app.put('/clients/:client_id', validation(clientsSchema.updateClients), clientsController.updateClients);
    app.delete('/clients/:client_id', validation(clientsSchema.deleteClients), clientsController.deleteClients);

}