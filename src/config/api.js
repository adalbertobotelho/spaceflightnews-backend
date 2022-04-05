const axios = require('axios');

const api = axios.create({
    baseURL: 'https://api.spaceflightnewsapi.net/v3',
});

module.exports = api;