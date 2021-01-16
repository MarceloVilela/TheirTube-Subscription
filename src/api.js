const axios = require('axios')
require('dotenv').config()

const api = axios.create({
    baseURL: process.env.api_url,
});

api.defaults.headers.common['Authorization'] = `Bearer ${process.env.api_token}`;

module.exports = api;
