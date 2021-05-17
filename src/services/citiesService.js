const { cityExist } = require('../../utils/cityExist');
const { UNPROCESSABLE_ENTITY, NOT_FOUND } = require('../../utils/errorsHandling');
module.exports = ({ repositories: { citiesRepository }, mappers: { citiesMapper } }) => {

    return {

        create: async ({ name, state, subject }) => {

            const cityExistent = await cityExist(citiesRepository, name, state);

            if (cityExistent) UNPROCESSABLE_ENTITY(`City already exists, found: ${cityExistent.name}`, 'citiesService', 'create');

            const userCreate = await citiesRepository.create({
                name,
                state,
                created_by: subject,
                updated_by: subject,
            });

            return citiesMapper.filter(userCreate)
        },

        get: async (query) => {
            const options = {
                limit: query.limit ? parseInt(query.limit) : 100,
                page: query.page ? parseInt(query.page) : 1
            }
            delete query.limit;
            delete query.page;
            const cities = await citiesRepository.find({ query, options });

            return citiesMapper.filterPaginate(cities);
        },

        getById: async (city_id) => {
            const cities = await citiesRepository.findById(city_id);

            if (!cities) NOT_FOUND('City id not found', 'citiesService', 'getById');

            return cities;
        },

        update: async (query, city_id) => {
            const cities = await citiesRepository.update(query, city_id);

            if (!cities) NOT_FOUND('City id not found', 'citiesService', 'update');

            return citiesMapper.filter(cities);
        },

        delete: async (query, city_id) => {
            const cities = await citiesRepository.update(query, city_id, true);

            if (!cities) NOT_FOUND('City id not found', 'citiesService', 'delete');

            return citiesMapper.filter(cities);;
        },
    }
}