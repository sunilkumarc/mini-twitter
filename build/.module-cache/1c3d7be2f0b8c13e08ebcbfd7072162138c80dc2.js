// var Root = React.createClass({
//   render : function() {
//     return (
//         <a href="/signup">SignUP</a>
//     );
//   }
// });
//
// React.render(<Root />, document.getElementById('mount-point'));

var SignUp = React.createClass({displayName: "SignUp",
    render: function(){
        return (
            'SignUp page'
        )
    }
});

const Router = require('react-router'),
     { Route, RouteHandler, DefaultRoute } = Router;

let routes = (
    React.createElement(Route, {name: "signup", handler: SigUp})
);

Router.run(routes, function (Handler) {
  React.render(React.createElement(Handler, null), document.getElementById('mount-point'));
});
