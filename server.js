/**
 * Created by guillermo on 11/12/2014.
 */
var express = require('express');
var Path = require('path');
var app = express();

var publicPath = Path.join(__dirname, 'dist');
// app.use(favicon(publicPath + '/favicon.ico'));
app.use(express.static(publicPath));

var port = 3000;
app.listen(port);
console.log('Magic happens on port: ' + port);

module.exports = app;