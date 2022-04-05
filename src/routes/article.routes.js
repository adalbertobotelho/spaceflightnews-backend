const { Router } = require('express');
const seedData = require('../utils/SeedData.js');

const createArticleController = require('../controllers/CreateArticleController.js');
const getArticlesWithPaginationController = require('../controllers/GetArticlesWithPaginationController.js');
const getArticleByIdController = require('../controllers/GetArticleByIdController.js')
const updateArticleController = require('../controllers/UpdateArticleController.js');
const deleteArticleController = require('../controllers/DeleteArticleController.js');

const articlesRouter = Router();

articlesRouter.post('/articles', createArticleController);
articlesRouter.get('/articles', getArticlesWithPaginationController);
articlesRouter.get('/articles/:id', getArticleByIdController);
articlesRouter.put('/articles/:id', updateArticleController)
articlesRouter.delete('/articles/:id', deleteArticleController);

articlesRouter.get('/', (_, response) => {
    response.status(200).send('Back-end Challenge 2022 🏅 - Space Flight News');
});

module.exports = articlesRouter;