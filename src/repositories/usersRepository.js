module.exports = ({ models: { usersModel } }) => {

    return {
        find: async ({ query = {}, options = {} }) => {
            return usersModel.paginate({ ...query, is_deleted: false }, options);
        },

        findById: async (user_id) => {
            return usersModel.findById(user_id);
        },

        create: async (data) => {
            return usersModel.create(data);
        },

        update: async (query, user_id, is_deleted = false) => {
            return usersModel.findOneAndUpdate({ ...user_id, is_deleted: false }, { ...query, is_deleted }, { new: true });
        }
    };
};