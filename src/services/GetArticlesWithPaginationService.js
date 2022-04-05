const Articles = require('../database/client.js');
const { articlesPerPage } = require('../config/constants.js');

const getArticlesWithPaginationService = async (pageNumber) => {
    const results = await Articles.findMany({
        include: {
            launches: true,
            events: true
        },
        take: articlesPerPage,
        skip: (Number(pageNumber)-1) * articlesPerPage,
    });

    return results;
}

module.exports = getArticlesWithPaginationService;