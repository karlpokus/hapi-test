#!/usr/bin/env node

// cmd METHOD PATH [DATA]

const args = require('minimist')(process.argv.slice(2));
const axios = require('axios');
const logger = (res) => console.log(res.data);

const method = args._[0];
const url = 'http://localhost:8000/api/v1/users' + args._[1];
const name = args._[2];
const data = name ? { name } : null;

axios({ method, url, data }).then(logger);
