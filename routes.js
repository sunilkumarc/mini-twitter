var User = require('./model/user');
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
