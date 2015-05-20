var express = require('express');
var routes = require('./routes');

var mongo = require('mongodb').MongoClient;
var app = express();
app.listen(8000);

app.get('/', routes.index);
