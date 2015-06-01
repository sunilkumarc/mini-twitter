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

server.post('/post/users', bodyParser(), function(req, res) {
    var user = new User({username: req.body['username'], pass: req.body['pass']});
    user.save(function(err) {
        if (err) {
            res.send('Could not save : ' + err);
        } else {
            res.send('Saved successfully');
        }
    });

});

server.get('/users/:id', function(req, res) {
    User.find({username: req.params.id}).exec(function(err, post) {
        if(err)
            return res.send(err);
        res.send(post);
    });
});

server.listen(8000);
console.log('Server started on port 8000 ...');
