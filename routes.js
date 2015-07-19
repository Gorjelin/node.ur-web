'use strict';

var app = require('./app.js');

app.get('/', function(req, res){
	res.sendfile('./views/index.html');
});


