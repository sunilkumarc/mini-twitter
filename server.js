var express = require('express');
var path = require('path');
var router = require('./routes');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var server = express();
var User = require('./models/user.js');

var db = undefined;

server.use(express.static(path.join(__dirname)));
server.use(bodyParser.json());

server.use(function(req,res,next){
    req.db = db;
    next();
});

var db_url = 'mongodb://localhost:27017/mini-twitter';

mongoose.connect(db_url, function(err, conn) {
    if(err) {
        console.log('Error while connecting to Mongoose : ' + err);
    }
});

server.post('/loginUser', bodyParser(), router.login);

server.listen(8000);
console.log('Server started on port 8000 ...');
