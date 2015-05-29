var express = require('express');
var path = require('path');
var router = require('./routes');
var mongoose = require('mongoose');
var server = express();

server.use(express.static(path.join(__dirname)));

var db_url = 'mongodb://localhost:27017/mini-twitter';
mongoose.connect(db_url, function(err, conn) {
    if(err) {
        console.log('Error while connecting to Mongoose : ' + err);
    }
});

server.get('/signup', router.index);

server.listen(8000);
console.log('Server started on port 8000 ...');
