'use strict';

const handlers = require('./handlers');

module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: handlers.findUsers,
    config: {
      description: 'get users',
      notes: 'The base path for the users api',
      tags: ['users', 'api']
    }
  },
  {
    method: 'POST',
    path: '/',
    handler: handlers.createUser,
    config: {
      payload: {
        parse: true,
        output: 'data'
      }
    }
  }
];
