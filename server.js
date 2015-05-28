var express = require('express');
var path = require('path');
var router = require('./routes');
var server = express();

server.use(express.static(path.join(__dirname)));

server.get('/signup', router.index);

server.listen(8000);
console.log('Server started on port 8000 ...');
