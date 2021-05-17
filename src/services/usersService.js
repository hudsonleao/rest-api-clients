const crypto = require('../../utils/crypto');
const { UNPROCESSABLE_ENTITY, NOT_FOUND } = require('../../utils/errorsHandling')
module.exports = ({ repositories: { usersRepository }, mappers: { usersMapper } }) => {

    return {

        create: async ({ name, user, password, subject }) => {
            const { docs: [userExist] } = await usersRepository.find({ query: { user } });
            if (userExist) UNPROCESSABLE_ENTITY('User already exists', 'usersService', 'create');

            const passwordHash = await crypto.createHash(password);
            const userCreate = await usersRepository.create({
                name,
                user,
                created_by: subject,
                updated_by: subject,
                password: passwordHash
            });

            return usersMapper.filter(userCreate)
        },

        get: async (query) => {
            const options = {
                limit: query.limit ? parseInt(query.limit) : 100,
                page: query.page ? parseInt(query.page) : 1
            }
            delete query.limit;
            delete query.page;
            delete query.password;
            const users = await usersRepository.find({ query, options });

            return usersMapper.filterPaginate(users);
        },

        getById: async (user_id) => {
            const users = await usersRepository.findById(user_id);

            if(!users) NOT_FOUND('User id not found', 'usersService', 'getById');

            return users;
        },

        update: async (query, user_id) => {

            if(query.password) query.password = await crypto.createHash(query.password);

            const users = await usersRepository.update(query, user_id);

            if(!users) NOT_FOUND('User id not found', 'usersService', 'update');

            return usersMapper.filter(users);
        },

        delete: async (user_id) => {
            const users = await usersRepository.update({}, user_id, true);

            if(!users) NOT_FOUND('User id not found', 'usersService', 'delete');

            return usersMapper.filter(users);;
        },
    }
}