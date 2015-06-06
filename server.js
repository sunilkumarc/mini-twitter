var express = require('express');
var path = require('path');
var router = require('./routes');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var server = express();
var User = require('./models/user.js');
var session = require('client-sessions');

var db = undefined;

server.use(express.static(path.join(__dirname)));
server.use(bodyParser.json());

var db_url = 'mongodb://localhost:27017/mini-twitter';

mongoose.connect(db_url, function(err, conn) {
    if(err) {
        console.log('Error while connecting to Mongoose : ' + err);
    }
});

server.use(session({
    cookieName: 'mini-twitter-session',
    secret: 'random string',
    duration: 30 * 60 * 1000,
    activeDuration: 5 * 60 * 1000,
}));

server.post('/loginUser', bodyParser(), router.login);
server.post('/signUpUser', bodyParser(), router.signup);

server.listen(8000);
console.log('Server started on port 8000 ...');
