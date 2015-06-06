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
        if(err)
            res.status(500).json(err);

        if(!user) {
            res.status(500).json({"err":"User Doesn't Exists"});
        } else {
            res.send(user);
        }
    });
}
