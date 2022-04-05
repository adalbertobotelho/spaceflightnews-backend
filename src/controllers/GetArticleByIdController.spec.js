/**
 * @jest-environment ./prisma/prisma-environment-jest
 */

 const app = require('../app.js');
 const request = require('supertest');
 
 describe("Get Article By Id Controller", () => {
 
    it("Should be able to get an article by its id", async () => {
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

        const { body: response } = await request(app)
            .get(`/articles/${id}`) 

        expect(response).toHaveProperty('id', id)
    });
});