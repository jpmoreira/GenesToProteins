var Hapi = require('hapi'),
  Routes = require('./routes'),
  //ProteinDatabase = require('./model/proteinDatabase'),
  Config = require('./config/config');

var app = {};
app.config = Config;

//For older version of hapi.js
//var server = Hapi.createServer(app.config.server.host, app.config.server.port, {cors: true});

var server = new Hapi.Server();

server.connection({ port: app.config.server.port });

server.route(Routes.endpoints);

server.start(function () {
  console.log('Server started ', server.info.uri);
});