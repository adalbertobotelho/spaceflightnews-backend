const getArticlesWithPaginationService = require('../services/GetArticlesWithPaginationService.js');

const getArticlesWithPaginationController = async (request, response) => {
    const page = request.query['page'] || 1;
    const results = await getArticlesWithPaginationService(page);
    return response.status(200).json(results); 
}

module.exports = getArticlesWithPaginationController;