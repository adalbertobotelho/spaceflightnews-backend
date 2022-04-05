const { Router } = require('express');
const articlesRouter = require('./article.routes.js');

const routes = Router();

routes.use('/', articlesRouter);
routes.use('/articles', articlesRouter);

module.exports = routes;