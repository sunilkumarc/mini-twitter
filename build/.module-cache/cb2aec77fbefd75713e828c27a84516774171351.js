const React = require('react');
const Router = require('react-router'),
    { Route, RouteHandler, DefaultRoute } = Router;


let routing = React.createClass({displayName: "routing",
    render: function() {
        return (
            React.createElement(RouteHandler, null)
        );
    }
});

var Login = React.createCalss({
    render: function() {
        return (
            React.createElement("h1", null, "login")
        );
    }
});

let routes = (
  React.createElement(Route, {name: "app", path: "/", handler: routing}, 
    React.createElement(Route, {name: "contact", path: "/login", handler: Login}), ";"
  )
);

Router.run(routes, function (Handler) {
  React.render(React.createElement(Handler, null), document.body);
});
