var React = require('react');
var Router = require('react-router'),
    { Route, RouteHandler, DefaultRoute } = Router;

var Welcome = require('welcome.js');

var routing = React.createClass({displayName: "routing",
    render: function() {
        return (
            React.createElement(RouteHandler, null)
        );
    }
});

let routes = (
  React.createElement(Route, {path: "/", handler: routing, location: "history"}, 
    React.createElement(DefaultRoute, {handler: Welcome})
    
  )
);

Router.run(routes, function (Handler) {
  React.render(React.createElement(Handler, null), document.body);
});
