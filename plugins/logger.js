'use strict';

exports.register = function (server, options, next) {
  console.log('logger ccccalled');
  next();
};

exports.register.attributes = {
  name: 'logger',
  version: '0.0.1'
};
