'use strict';

const routes = require('./routes');

exports.register = function (server, options, next) {
  server.route(routes);
  next();
};

exports.register.attributes = {
  name: 'the users api',
  version: '0.0.1'
};
