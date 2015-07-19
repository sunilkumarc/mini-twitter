var React = require('react');

var Home = React.createClass({displayName: "Home",
    render: function() {
        return (
            React.createElement("div", null, 
            React.createElement("h1", null, "Welcome to Mini Twitter."), 
            "Connect with your friends — and other fascinating people.", React.createElement("br", null), 
            "Get in-the-moment updates on the things that interest you.", React.createElement("br", null), 
            "And watch events unfold, in real time, from every angle.", React.createElement("br", null), React.createElement("br", null), 

            React.createElement("a", {href: "/#/login"}, "Login"), React.createElement("br", null), React.createElement("br", null), 

            "New to Mini Twitter ?", React.createElement("br", null), 
            React.createElement("a", {href: "/#/signup"}, "Sign Up")
            )

        );
    }
});

module.exports = Home;
