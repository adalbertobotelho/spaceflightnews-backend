/**
 * @jest-environment ./prisma/prisma-environment-jest
 */

const app = require('../app.js');
const request = require('supertest');

describe("Create Article Controller", () => {

    it("Should be able to create a new article", async () => {
        const response = await request(app)
            .post('/articles')
            .send({
                title: 'Test Article',
                featured: true,
                url: 'blog.com/article',
                imageUrl: 'blog.com/article/imagem.png',
                newsSite: 'example.com',
                summary: 'This is a summary for test article'
            });

            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty('id');
    });
});