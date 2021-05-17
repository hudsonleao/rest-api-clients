const { calculateAge } = require("../../utils/calculateAge");

module.exports = {

    filter: async ({ _id, name, gender, dateOfBirth, city_id, created_by, updated_by, created_at, updated_at }) => {
        return { _id, name, gender, dateOfBirth, age: calculateAge(dateOfBirth), city: { _id: city_id._id, name: city_id.name, state: city_id.state }, created_by, updated_by, created_at, updated_at }
    },

    filterPaginate: async ({
        docs = [],
        totalDocs,
        limit,
        totalPages,
        page,
        pagingCounter,
        hasPrevPage,
        hasNextPage,
        prevPage,
        nextPage
    }) => {

        const data = {
            docs: docs.map(({ _id, name, gender, dateOfBirth, city_id, created_by, updated_by, created_at, updated_at }) => {
                return { _id, name, gender, dateOfBirth, age: calculateAge(dateOfBirth), city: { _id: city_id._id, name: city_id.name, state: city_id.state }, created_by, updated_by, created_at, updated_at }
            }),
            totalDocs,
            limit,
            totalPages,
            page,
            pagingCounter,
            hasPrevPage,
            hasNextPage,
            prevPage,
            nextPage
        }

        return data;
    }
}