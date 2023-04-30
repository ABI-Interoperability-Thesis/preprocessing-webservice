require('dotenv').config();
const endpoints = require('../config/endpoints.json')
const axios = require('axios');
const runtime_env = process.env.ENV
const endpoint = endpoints['mysql'][runtime_env]

const MatchDB = async (attribute, value) => {
    const data = JSON.stringify({ attribute, value });

    const config = {
        method: 'post',
        url: `${endpoint}/api/match-attribute`,
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };

    let db_mapping
    const axios_response = await axios(config)
    axios_response.data ? db_mapping = axios_response.data : db_mapping = 0

    return db_mapping
}

module.exports = {
    MatchDB: MatchDB
}