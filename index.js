'use strict';
var http = require('http');
var app = require('./app.js');
var port = app.get('port');
require('./routes.js');
http.createServer(app).listen(port, function(){
	console.log('testing ');
})
