const getArticleByIdService = require('../services/GetArticleByIdService.js');

const getArticleByIdController = async (request, response) => {
    const { id } = request.params;
    const article = await getArticleByIdService(id);

    if (!article) {
        return response.status(404).send();
    }

    return response.status(200).json(article);
}

module.exports = getArticleByIdController;