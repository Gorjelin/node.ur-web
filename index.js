'use strict';

var http = require('http'),
	express = require('express');
	
var app = express();

app.get('/', function(req, res){
	res.send('Привет!');
});

http.createServer(app).listen(8001, function(){
	console.log('yello');
})
