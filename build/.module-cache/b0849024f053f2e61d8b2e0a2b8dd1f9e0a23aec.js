const React = require('react');

const Router = require('react-router'),
	{ Route, RouteHandler, DefaultRoute } = Router;

let App = React.createClass({displayName: "App",
  render() {
    return (
        Working
    );
  }
});

let routes = (
  React.createElement(Route, {name: "app", path: "/", handler: App}, 
		React.createElement(Route, {name: "home", path: "/home", handler: Home}), 
		React.createElement(Route, {name: "test", path: "/test/:quizID/:qno", handler: Test}), 
    React.createElement(Route, {name: "contact_us", path: "/contact_us", handler: ContactUsHandler}), 
		React.createElement(Route, {name: "sign_up", path: "/sign_up", handler: SignUp}), 
		React.createElement(Route, {name: "intro", path: "/intro", handler: Intro}), 
		React.createElement(DefaultRoute, {handler: SignUp})
  )
);

Router.run(routes, function (Handler) {
  React.render(React.createElement(Handler, null), document.body);
});
