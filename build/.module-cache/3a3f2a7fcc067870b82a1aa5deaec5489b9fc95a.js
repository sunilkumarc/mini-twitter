var React = require('react');
var Router = require('react-router'),
{ Route, RouteHandler, DefaultRoute } = Router;

var SignUp = React.createClass({displayName: "SignUp",
    render: function() {
        return (
            signup
        );
    }
});

let routes = (
  React.createElement(Route, {name: "app", path: "/signup", handler: SignUp}, 
    React.createElement(Route, {name: "contact", path: "contact/:id", handler: require('./handlers/Contact')})
  )
);

Router.run(routes, function (Handler) {
  React.render(React.createElement(Handler, null), document.body);
});
