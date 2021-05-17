module.exports = (app) => {

    const { controllers: { clientsController } } = app

    app.post('/clients', clientsController.createClients);
    app.get('/clients', clientsController.getClients);
    app.get('/clients/:client_id', clientsController.getClientsById);
    app.put('/clients/:client_id', clientsController.updateClients);
    app.delete('/clients/:client_id', clientsController.deleteClients);

}