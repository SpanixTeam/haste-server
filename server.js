var http = require('http');
var url = require('url');
var fs = require('fs');

var winston = require('winston');

var StaticHandler = require('./lib/static_handler');
var DocumentHandler = require('./lib/document_handler');

// Load the configuration and set some defaults
var config = JSON.parse(fs.readFileSync('config.js', 'utf8'));
config.port = config.port || 7777;
config.host = config.host || 'localhost';

// Set up the logger
if (config.logging) {
  try {
    winston.remove(winston.transports.Console);
  } catch(er) { }
  var detail, type;
  for (var i = 0; i < config.logging.length; i++) {
    detail = config.logging[i];
    type = detail.type;
    delete detail.type;
    winston.add(winston.transports[type], detail);
  }
}

// TODO implement command line

// Set the server up
http.createServer(function(request, response) {

  var incoming = url.parse(request.url, false);
  var handler = null;

  // Looking to add a new doc
  if (incoming.pathname.match(/^\/documents$/) && request.method == 'POST') {
    handler = new DocumentHandler({ keyLength: config.keyLength });
    return handler.handlePost(request, response);
  }

  // Looking up a doc
  var match = incoming.pathname.match(/^\/documents\/([A-Za-z0-9]+)$/);
  if (request.method == 'GET' && match) {
    handler = new DocumentHandler();
    return handler.handleGet(match[1], response);
  }

  // Otherwise, look for static file
  handler = new StaticHandler('./static');
  handler.handle(incoming.pathname, response);

}).listen(config.port, config.host);

winston.info('listening on ' + config.host + ':' + config.port);
