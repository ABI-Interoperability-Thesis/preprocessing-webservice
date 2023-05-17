require('dotenv').config();
const endpoints = require('../config/endpoints.json')
const axios = require('axios');
const runtime_env = process.env.ENV
const endpoint = endpoints['mysql'][runtime_env]

const MatchDB = async (attribute, value, model_name) => {
    const data = JSON.stringify({ attribute, value, model_name });

    const config = {
        method: 'post',
        url: `${endpoint}/api/match-attribute`,
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };

    const axios_response = await axios(config)
    const db_mapping = axios_response.data.mapping

    return db_mapping
}

module.exports = {
    MatchDB: MatchDB
}