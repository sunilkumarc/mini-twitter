var SignUp = React.createClass({displayName: "SignUp",
    render: function(){
        return (
            'SignUp page'
        );
    }
});

const Router = require('react-router');

var Route = Router.Route,
    RouteHandler = Router.RouteHandler,
    DefaultRoute = Router.DefaultRoute;

var routes = (
    React.createElement(Route, {name: "signup", handler: SigUp})
);

Router.run(routes, function (Handler) {
  React.render(React.createElement(Handler, null), document.getElementById('mount-point'));
});
