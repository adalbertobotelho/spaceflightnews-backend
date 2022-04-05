const createArticleService = require('../services/CreateArticleService.js');

const createArticleController = async (request, response) => {
    const newArticle = request.body;
    const createdArticle = await createArticleService(newArticle);
    return response.status(200).send(createdArticle);
}

module.exports = createArticleController