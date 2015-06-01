var React = require('react');

var Login = React.createClass({displayName: "Login",
    render: function() {
        return (
            React.createElement("div", null, 
                React.createElement("h1", null, "Login Page")
            )
        );
    }
});

module.exports = Login;
