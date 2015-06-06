var React = require('react');
var Router = require('react-router'),
    { Route, RouteHandler, DefaultRoute } = Router;

var Welcome = require('./welcome.js');
var SignUp = require('./signup.js');
var Login = require('./login.js');

var routing = React.createClass({displayName: "routing",
    render: function() {
        return (
            React.createElement(RouteHandler, null)
        );
    }
});

let routes = (
  React.createElement(Route, {path: "/", handler: routing}, 
    React.createElement(Route, {name: "signup", path: "/signup", handler: SignUp}), 
    React.createElement(Route, {name: "login", path: "/login", handler: Login}), 
    React.createElement(DefaultRoute, {handler: Welcome})
  )
);

Router.run(routes, function (Handler) {
  React.render(React.createElement(Handler, null), document.body);
});
