var React = require('react');
var Router = require('react-router'),
    { Route, RouteHandler, DefaultRoute } = Router;

var Welcome = require('./components/welcome.js');
var SignUp = require('./components/signup.js');
var Login = require('./components/login.js');

var routing = React.createClass({displayName: "routing",
    render: function() {
        return (
            React.createElement(RouteHandler, null)
        );
    }
});

let routes = (
  React.createElement(Route, {path: "/", handler: routing, location: "history"}, 
    React.createElement(DefaultRoute, {handler: Welcome}), 
    React.createElement(Route, {name: "signup", path: "/signup", handler: SignUp}), 
    React.createElement(Route, {name: "login", path: "/login", handler: Login})
  )
);

Router.run(routes, function (Handler) {
  React.render(React.createElement(Handler, null), document.body);
});
