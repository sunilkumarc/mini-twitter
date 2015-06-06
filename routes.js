var User = require('./models/user');
var React = require('react');
var User = require('./models/user.js');

exports.index = function(req, res) {

    var signupComponent = React.createClass({
        render: function() {
            return (
                React.Dom.input({type:'text'})
            )
        }
    });

    // React.render(signupComponent, document.body);
    res.send('Working on it :(');
}

exports.login = function(req, res) {

    User.findOne({email: req.body.email, pass: req.body.pass}).exec(function(err, user) {
        if(user) {
            res.send(user);
        } else {
            res.status(500).send("User Doesn't Exists");
        }
    });
}

exports.signup = function(req, res) {

    var user = new User({
        first: req.body.first,
        last: req.body.last,
        email: req.body.email,
        pass: req.body.pass
    });

    user.save(function(err) {
        if (!err) {
            console.log("200 OK");
            res.status(200).send("OK");
        } else {
            if(err.code = 11000)
                res.status(500).send("Email already taken!");
            else
                res.status(500).send("Somethind bad happened!");
        }
    });
}
