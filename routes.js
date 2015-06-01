var User = require('./models/user');
var React = require('react');

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

    console.log('Inside login handler');
}
