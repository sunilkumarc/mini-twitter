var React = require('react');

var Home = React.createClass({
    render: function() {
        return (
            <div>
            <h1>Welcome to Mini Twitter.</h1>
            Connect with your friends — and other fascinating people.<br/>
            Get in-the-moment updates on the things that interest you.<br/>
            And watch events unfold, in real time, from every angle.<br/><br/>

            <a href="/#/login">Login</a><br/><br/>

            New to Mini Twitter ?<br/>
            <a href="/#/signup">Sign Up</a>
            </div>

        );
    }
});

module.exports = Home;
