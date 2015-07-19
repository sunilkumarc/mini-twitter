var User = require('./models/user');
var React = require('react');

exports.login = function(req, res) {

    User.findOne({email: req.body.email, pass: req.body.pass}).exec(function(err, user) {
        if(user) {
            res.send(user);
        } else {
            res.status(500).send("User Doesn't Exist");
        }
    });
}

exports.signup = function(req, res) {

    var user = new User({
        first: req.body.first,
        last: req.body.last,
        email: req.body.email,
        pass: req.body.pass,
        following: [],
        followers: [],
        following_count: 0,
        followers_count: 0
    });

    user.save(function(err) {
        if (!err) {
            console.log("User saved succesfully!");
            res.status(200).send("OK");
        } else {
            if(err.code = 11000)
                res.status(500).send("Email already taken!");
            else
                res.status(500).send("Something bad happened!");
        }
    });
}
