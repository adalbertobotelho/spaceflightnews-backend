const Articles = require('../database/client.js');
const api = require('../config/api.js');

const seedData = async () => {
    try {
        const { data: length } = await api.get('/articles/count');
        const { data: articlesFromApi } = await api.get(`/articles?_limit=${length}`);

        const articlesToCreate = articlesFromApi.map(articleFromApi => ({
            id: articleFromApi.id,
            featured: articleFromApi.featured,  
            title: articleFromApi.title,
            url: articleFromApi.url,
            imageUrl: articleFromApi.imageUrl,
            newsSite: articleFromApi.newsSite,
            summary: articleFromApi.summary,
            publishedAt: articleFromApi.publishedAt 
        }));

        const { count: createdArticles } = await Articles.createMany({
            data: articlesToCreate,
            skipDuplicates: true
        });

        return createdArticles === 0 ? `Database up to date. No articles were created` : `Database updated. ${createdArticles} articles were created`
    } catch (error) {
        console.log(error);
    } finally {
        // await prisma.$disconnect();
    }
}

module.exports = seedData;