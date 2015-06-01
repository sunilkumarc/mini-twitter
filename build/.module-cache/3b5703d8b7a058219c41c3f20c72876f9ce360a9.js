var React = require('react');

var SignUp = React.createClass({displayName: "SignUp",
    render: function() {
        return (
            React.createElement("div", null, 
                React.createElement("h1", null, "Welcom to mini twitter"), 
                React.createElement("a", {href: "/#/signup"}, "SignUp")
            )
        );
    }
});

module.exports = SignUp;
