var React = require('react');
var Router = require('react-router'),
{ Route, RouteHandler, DefaultRoute } = Router;

let routes = (
  React.createElement(Route, {name: "app", path: "/", handler: App}, 
		React.createElement(Route, {name: "home", path: "/home", handler: Home}), 
		React.createElement(Route, {name: "test", path: "/test/:quizID/:qno", handler: Test})
  )
);

Router.run(routes, function (Handler) {
  React.render(React.createElement(Handler, null), document.body);
});
