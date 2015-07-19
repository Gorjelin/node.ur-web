'use strict';

var express = require('express');

var app = module.exports = exports = express();

app.set('port', process.env.PORT || 8001);
app.set('views', './views');
console.log(app.set);
app.set('views engine', 'jade');
app.use(express.static('./views'))
//app.use(express.logger('dev'));
//app.use(app.router);


