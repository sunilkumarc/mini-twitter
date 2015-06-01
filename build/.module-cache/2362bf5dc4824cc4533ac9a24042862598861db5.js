var React = require('react');

var SignUp = React.createClass({displayName: "SignUp",
    render: function() {
        return (
            React.createElement("div", null, 
                React.createElement("h1", null, "Sign Up Page")
            )
        );
    }
});

module.exports = SignUp;
