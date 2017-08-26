#!/usr/bin/env node

// cmd -m METHOD -d DATA URL

const args = require('minimist')(process.argv.slice(2));
const axios = require('axios');
const logger = (res) => console.log(res.data);
const url = 'http://localhost:8000/api/v1/users';
const method = args._[0];
const name = args._[1];
const data = name ? { name } : null;

axios({ method, url, data }).then(logger);
