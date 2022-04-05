const deleteArticleService = require('../services/DeleteArticleService.js');

const deleteArticleController = async (request, response) => {
    const { id } = request.params;

    const deletedArticle = await deleteArticleService(id)

    console.log(deletedArticle)

    if (!deletedArticle) {
        return response.status(404).send();
    }

    return response.status(200).send();
}

module.exports = deleteArticleController;