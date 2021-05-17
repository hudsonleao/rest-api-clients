module.exports = ({ models: { clientsModel, citiesModel } }) => {
    return {
        find: async ({ query = {}, options = {} }) => {
            return clientsModel.paginate({ ...query, is_deleted: false }, options);
        },

        findById: async (client_id) => {
            return clientsModel.findById(client_id);
        },

        findAll: async ({ query = {}}) => {
            return citiesModel.find({ ...query, is_deleted: false });
        },

        create: async (data) => {
            return clientsModel.create(data);
        },

        update: async (query, client_id, is_deleted = false) => {
            return clientsModel.findOneAndUpdate({ ...client_id, is_deleted: false }, { ...query, is_deleted }, { new: true });
        }
    }
}