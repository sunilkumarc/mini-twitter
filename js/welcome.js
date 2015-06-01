var React = require('react');

var Home = React.createClass({
    render: function() {
        return (
            <div>
                <h1>Welcom to mini twitter</h1>
                <a href='/#/signup'>SignUp</a><br/>
                <a href='/#/login'>Login</a>
            </div>
        );
    }
});

module.exports = Home;
