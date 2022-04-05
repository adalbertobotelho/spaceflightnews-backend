const Articles = require('../database/client.js');

const createArticleService = async (article) => {
    const newArticle = {
        ...article,
        publishedAt: new Date().toISOString()
    }

    const createdArticle = await Articles.create({ data: newArticle });

    return createdArticle;
}

module.exports = createArticleService;