const React = require('react');

const Router = require('react-router');
	// { Route, RouteHandler, DefaultRoute } = Router;
let Route = Router.Route,
    RouteHandler = Router.RouteHandler,
    DefaultRoute = Router.DefaultRoute;


let App = React.createClass({displayName: "App",
  render() {
    return (
			React.createElement("div", null, 
				"Working", 
				/* this is the importTant part */
				React.createElement(RouteHandler, null)
			)
    );
  }
});

let SignUp = React.createClass({displayName: "SignUp",
    render() {
        return (
            'SignUP'
        );
    }
});

let routes = (
  React.createElement(Route, {name: "app", path: "/", handler: App}, 
		React.createElement(Route, {name: "signup", path: "/signup", handler: SignUp})
  )
);

Router.run(routes, function (Handler) {
  React.render(React.createElement(Handler, null), document.body);
});
