module.exports = ({ models: { citiesModel } }) => {
    return {
        find: async ({ query = {}, options = {} }) => {
            return citiesModel.paginate({ ...query, is_deleted: false }, options);
        },

        findAll: async ({ query = {}}) => {
            return citiesModel.find({ ...query, is_deleted: false });
        },

        findById: async (city_id) => {
            return citiesModel.findById(city_id);
        },

        create: async (data) => {
            return citiesModel.create(data)
        },

        update: async (query, city_id, is_deleted = false) => {
            return citiesModel.findOneAndUpdate({ ...city_id, is_deleted: false }, { ...query, is_deleted }, { new: true });
        }
    }
}