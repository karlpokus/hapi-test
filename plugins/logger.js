'use strict';

exports.register = function (server, options, next) {
  console.log('logger called');
  next();
};

exports.register.attributes = {
  name: 'logger',
  version: '0.0.1'
};
