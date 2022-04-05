/**
 * @jest-environment ./prisma/prisma-environment-jest
 */

const app = require('../app.js');
const request = require('supertest');
  
describe("Update Article Controller", () => {
 
    it("Should be able to update an article", async () => {
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
            .put(`/articles/${id}`)
            .send({
                title: `Test Article Updated`,
                featured: false
            });

        const { body: response } = await request(app).get(`/articles/${id}`);

        expect(response).toHaveProperty('title', 'Test Article Updated');
        expect(response).toHaveProperty('featured', false);
    });
     
});