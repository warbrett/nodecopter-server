'use strict';

var Hapi = require('hapi');
var joi = require('joi');

var server = new Hapi.Server();
var copter = require('./lib/copter');
var copterControl = require('./lib/copterControl');

server.connection({ port: 3000 });

server.route({
  method: 'GET',
  path: '/{p}',
  config: {
    validate: {
      params: {
       p: joi.number().integer()
      }
    }
  },
  handler: function (request, reply) {
    console.log('called with', request.params.p);
    copterControl(copter, request.params.p);
    reply().code(201);
  }
});

console.log('connecting to copter');
copter.connect(function(){
  console.log('connected, now running setup');
  copter.setup(function(){
    copter.startPing();
    copter.wheelOn();
    console.log('connected, now pinging and starting control server');
    server.start(function(){
      console.log('Server running at:', server.info.uri);
    });
  });
});
