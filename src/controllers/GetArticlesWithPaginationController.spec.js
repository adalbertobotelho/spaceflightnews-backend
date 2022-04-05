/**
 * @jest-environment ./prisma/prisma-environment-jest
 */

const app = require('../app.js');
const request = require('supertest');

const { articlesPerPage } = require('../config/constants.js');

let articlesToCreate = [];

for (i = 0; i < articlesPerPage * 2; i++) {
    articlesToCreate.push({
        title: `Test Article #${i}`,
        featured: true,
        url: `blog.com/article-${i}`,
        imageUrl: `blog.com/article-${i}/imagem.png`,
        newsSite: 'example.com',
        summary: `This is a summary for test article #${i}`        
    })
}
 
describe("Get Articles With Pagination Controller", () => {

    it("Should be able to get articles using correct pagination", async () => {
        articlesToCreate.map(async article => {
            await request(app).post('/articles').send(article);
        });

        const { body: response } = await request(app).get('/articles');

        expect(response).toHaveLength(articlesPerPage);
    });
    
});