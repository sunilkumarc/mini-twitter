var React = require('react');
var Router = require('react-router');

var Route = Router.Route;
var RouterHandler = Router.RouterHandler;
var DefaultRoute = Router.DefaultRoute;

var SignUp = React.createClass({displayName: "SignUp",
    render: function() {
        return (
            signup
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
  React.createElement(Route, {name: "app", path: "/", handler: SignUp}, 
    React.createElement(Route, {name: "contact", path: "/login", handler: Login1})
  )
);

Router.run(routes, function (Handler) {
  React.render(React.createElement(Handler, null), document.body);
});

console.log('working this is...!');
