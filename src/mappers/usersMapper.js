module.exports = {

    filter: async ({ _id, name, user, active, created_by, updated_by, created_at, updated_at  }) => {
        return { _id, name, user, active, created_by, updated_by, created_at, updated_at  };
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
            docs: docs.map(({ _id, name, user, active, created_by, updated_by, created_at, updated_at  }) => {
                return { _id, name, user, active, created_by, updated_by, created_at, updated_at  };
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
        };

        return data;
    }
};