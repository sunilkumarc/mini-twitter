var React = require('react');

var Dashboard = React.createClass({displayName: "Dashboard",
    render: function() {
        return (
            React.createElement("div", null, 
                React.createElement("h1", null, "You are succesfully loggedin. Welcome to your dashboard.")
            )
        );
    }
});

module.exports = Dashboard;
