const Router = require('react-router');

var SignUp = React.createClass({displayName: "SignUp",
    render: function(){
        return (
            'SignUp page'
        );
    }
});

var Route = Router.Route,
    RouteHandler = Router.RouteHandler,
    DefaultRoute = Router.DefaultRoute;

var routes = (
    React.createElement(Route, {name: "signup", handler: SignUp}
    )
);

Router.run(routes, function (Handler) {
  React.render(React.createElement(Handler, null), document.getElementById('mount-point'));
});
