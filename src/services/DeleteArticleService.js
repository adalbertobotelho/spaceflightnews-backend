const Articles = require('../database/client.js');

const deleteArticleService = async (id) => {
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
        return false;
    }

    await Articles.delete({
        where: {
            id: Number(id)
        }
    });

    return true;
}

module.exports = deleteArticleService;