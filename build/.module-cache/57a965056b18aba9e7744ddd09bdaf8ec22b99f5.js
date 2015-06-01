var React = require('react');
var Router = require('react-router'),
{ Route, RouteHandler, DefaultRoute } = Router;

let routes = (
  React.createElement(Route, {name: "app", path: "/", handler: App}
		
  )
);

Router.run(routes, function (Handler) {
  React.render(React.createElement(Handler, null), document.body);
});
