const validation = require('../middlewares/validationMiddleware');
const citiesSchema = require('../schemas/citiesSchema');
module.exports = (app) => {

    const { controllers: { citiesController } } = app;

    app.post('/cities', validation(citiesSchema.createCities), citiesController.createCities);
    app.get('/cities', validation(citiesSchema.getCities), citiesController.getCities);
    app.get('/cities/:city_id', validation(citiesSchema.getCitiesById), citiesController.getCitiesById);
    app.put('/cities/:city_id', validation(citiesSchema.updateCities), citiesController.updateCities);
    app.delete('/cities/:city_id', validation(citiesSchema.deleteCities), citiesController.deleteCities);

};