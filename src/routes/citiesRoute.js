module.exports = (app) => {

    const { controllers: { citiesController } } = app

    app.post('/cities', citiesController.createCities);
    app.get('/cities', citiesController.getCities);
    app.get('/cities/:city_id', citiesController.getCitiesById);
    app.put('/cities/:city_id', citiesController.updateCities);
    app.delete('/cities/:city_id', citiesController.deleteCities);

}