const Articles = require('../database/client.js');

const updateArticleService = async (id, articleWithUpdatedInfo) => {
    const article = await Articles.findFirst({
        where: { 
            id: Number(id)
        },
        include: {
            launches: true,
            events: true
        }
    });

    if (!article) {
        return;
    }

    const updatedArticle = await Articles.update({
        where: {
            id: Number(id)
        },
        data: articleWithUpdatedInfo
    });

    return updatedArticle
}

module.exports = updateArticleService