var SignUp = React.createClass({displayName: "SignUp",
    render: function(){
        return (
            'SignUp page'
        );
    }
});

const Router = require('react-router');
var { Route, RouteHandler, DefaultRoute } = Router;

let routes = (
    React.createElement(Route, {name: "signup", handler: SigUp})
);

Router.run(routes, function (Handler) {
  React.render(React.createElement(Handler, null), document.getElementById('mount-point'));
});
