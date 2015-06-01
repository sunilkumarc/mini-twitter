var React = require('react');
var Router = require('react-router'),
{ Route, RouteHandler, DefaultRoute } = Router;

// var Route = Router.Route;
// var RouterHandler = Router.RouterHandler;
// var DefaultRoute = Router.DefaultRoute;

var routing = React.createClass({displayName: "routing",
    render: function() {
        return (
            React.createElement(RouteHandler, null)
        );
    }
});

var Login = React.createCalss({
    render: function() {
        return (
            login
        );
    }
});

let routes = (
  React.createElement(Route, {name: "app", path: "/", handler: routing}, 
    React.createElement(Route, {name: "contact", path: "/login", handler: Login})
  )
);

Router.run(routes, function (Handler) {
  React.render(React.createElement(Handler, null), document.body);
});

console.log('working this is...!');
