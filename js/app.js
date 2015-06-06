var React = require('react');
var Router = require('react-router'),
    { Route, RouteHandler, DefaultRoute } = Router;

var Welcome = require('./welcome.js');
var SignUp = require('./signup.js');
var Login = require('./login.js');

var routing = React.createClass({
    render: function() {
        return (
            <RouteHandler />
        );
    }
});

let routes = (
  <Route path="/" handler={routing}>
    <Route name="signup" path="/signup" handler={SignUp} />
    <Route name="login" path="/login" handler={Login} />
    <DefaultRoute handler={Welcome} />
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});
