/**
 * @jest-environment ./prisma/prisma-environment-jest
 */

const app = require('../app.js');
const request = require('supertest');
const getArticleByIdService = require('../services/GetArticleByIdService.js');
 
 describe("Delete Article Controller", () => {
 
    it("Should be able to delete an article", async () => {
        const { body: createdArticle } = await request(app)
            .post('/articles')
            .send({
                title: 'Test Article',
                featured: true,
                url: 'blog.com/article',
                imageUrl: 'blog.com/article/imagem.png',
                newsSite: 'example.com',
                summary: 'This is a summary for test article'
            });

        const { id } = createdArticle;

        await request(app)
            .delete(`/articles/${id}`)

        const { status } = await request(app)
            .get(`/articles/${id}`)  

        expect(status).toEqual(404);
    });
});