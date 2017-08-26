'use strict';

const handlers = require('./handlers');

module.exports = [
  {
    method: 'GET',
    path: '/{name?}',
    handler: handlers.findUsers
  },
  {
    method: 'POST',
    path: '/',
    handler: handlers.createUser
    /*config: {
      payload: {
        parse: true,
        output: 'data'
      }
    }*/
  },
  {
    method: 'PUT',
    path: '/{name?}',
    handler: handlers.updateUser
  },
  {
    method: 'DELETE',
    path: '/{name}',
    handler: handlers.deleteUser
  }
];
