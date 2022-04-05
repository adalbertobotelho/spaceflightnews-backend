const Articles = require('../database/client.js');

const getArticleByIdService = async (id) => {
    const article = await Articles.findFirst({
        where: { 
            id: Number(id)
        },
        include: {
            launches: true,
            events: true
        }
    });

    return article;
}

module.exports = getArticleByIdService;