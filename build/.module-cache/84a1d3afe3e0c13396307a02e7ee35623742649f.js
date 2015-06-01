var React = require('react');
var Router = require('react-router'),
    { Route, RouteHandler, DefaultRoute } = Router;

var welcome = require('./components/welcome.js');

var routing = React.createClass({displayName: "routing",
    render: function() {
        return (
            React.createElement(RouteHandler, null)
        );
    }
});

var Login = React.createClass({displayName: "Login",
    render: function() {
        return (
            React.createElement("h1", null, "login")
        );
    }
});

let routes = (
  React.createElement(Route, {path: "/", handler: routing, location: "history"}, 
    React.createElement(DefaultRoute, {handler: welcome}), 
    React.createElement(Route, {name: "contact", path: "/#/signup", handler: Login})
  )
);

Router.run(routes, Router.HistoryLocation, function (Handler) {
  React.render(React.createElement(Handler, null), document.body);
});
