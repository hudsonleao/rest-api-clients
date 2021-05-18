const cityExist = require('../../utils/cityExist');
const { UNPROCESSABLE_ENTITY, NOT_FOUND } = require('../../utils/errorsHandling');

module.exports = ({ repositories: { clientsRepository, citiesRepository }, mappers: { clientsMapper } }) => {

    return {

        create: async ({ name, gender, dateOfBirth, city, state, subject }) => {
            const { docs: [userExist] } = await clientsRepository.find({ query: { name } });
            if (userExist) return UNPROCESSABLE_ENTITY('Client already exists', 'clientsService', 'create');

            const cityExistent = await cityExist(citiesRepository, city, state);

            if (!cityExistent) return UNPROCESSABLE_ENTITY('City not found, register the new city and try again.', 'citiesService', 'create');

            const { _id: city_id } = cityExistent;

            const clientCreate = await clientsRepository.create({
                name,
                gender,
                dateOfBirth,
                city_id,
                created_by: subject,
                updated_by: subject,
            });

            let client = clientCreate._doc;
            client.city_id = { _id: city_id, name: city, state };

            return clientsMapper.filter(client);
        },

        get: async (query) => {
            const options = {
                limit: query.limit ? parseInt(query.limit) : 100,
                page: query.page ? parseInt(query.page) : 1,
                populate: 'city_id'
            };
            delete query.limit;
            delete query.page;
            const clients = await clientsRepository.find({ query, options });

            if (clients.docs.length > 0) return clientsMapper.filterPaginate(clients);
            
            return clients;
        },

        getById: async (user_id) => {
            const clients = await clientsRepository.findById(user_id);

            if (!clients) return NOT_FOUND('User id not found', 'clientsService', 'getById');

            return clients;
        },

        update: async (query, user_id) => {

            const clients = await clientsRepository.update(query, user_id);

            if (!clients) return NOT_FOUND('User id not found', 'clientsService', 'update');

            return clientsMapper.filter(clients);
        },

        delete: async (user_id) => {
            const clients = await clientsRepository.update({}, user_id, true);

            if (!clients) return NOT_FOUND('User id not found', 'clientsService', 'delete');

            return clientsMapper.filter(clients);
        },
    };
};