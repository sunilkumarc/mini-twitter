var React = require('react');

var Home = React.createClass({displayName: "Home",
    render: function() {
        return (
            React.createElement("div", null, 
                React.createElement("h1", null, "Welcom to mini twitter"), 
                React.createElement("a", {href: "/#/signup"}, "SignUp"), 
                React.createElement("a", {href: "/#/login"}, "Login")
            )
        );
    }
});

module.exports = Home;
