const updateArticleService = require('../services/UpdateArticleService.js');

const updateArticleController = async (request, response) => {
    const { id } = request.params;
    const articleWithUpdatedInfo = request.body;
    const updatedArticle = await updateArticleService(id, articleWithUpdatedInfo);

    if (!updatedArticle) {
        return response.status(404).send();
    }

    return response.status(200).json(updatedArticle);
}

module.exports = updateArticleController;