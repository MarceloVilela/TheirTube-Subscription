const axios = require('axios')
const env = require('../env');

const api = axios.create({
    baseURL: env.api_url,
});

api.defaults.headers.common['Authorization'] = `Bearer ${env.api_token}`;

module.exports = api;
