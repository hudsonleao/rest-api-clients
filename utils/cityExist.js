const { filterCities } = require("./filterCities");
module.exports = {

    cityExist: async (citiesRepository, city, state) => {

        const docs = await citiesRepository.findAll({
            query: {
                name: { $regex: city.substr(0, 1), $options: 'i' }, state
            }
        });

        if (docs.length > 0) {
            const [cityExist] = await filterCities(city, docs);

            if (cityExist) return { _id: cityExist._id, name: cityExist.name}
        }

        return false;

    }
}