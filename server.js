'use strict';

const Hapi = require('hapi');
const config = require('./config');
const userRoutes = require('./api-v1/routes/users');

// db
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(config.dbConnection, { useMongoClient: true });

// server
const server = new Hapi.Server({
  connections: {
    router: { stripTrailingSlash: true }
  }
});
server.connection(config.serverConnection);
server.register([
  {
    register: userRoutes,
    routes: { prefix: '/api/v1/users' }
  }
]);
server.start((err) => {
  if (err) { throw err; }
  console.log('Server running at:', server.info.uri);
});
