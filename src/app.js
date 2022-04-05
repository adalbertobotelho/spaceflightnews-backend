const express = require('express');
const routes = require('./routes/index.js');
const swaggerUi = require('swagger-ui-express');
const cors = require('cors');

const swaggerDocs = require('./config/swagger.json');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
app.use(routes);

module.exports = app;