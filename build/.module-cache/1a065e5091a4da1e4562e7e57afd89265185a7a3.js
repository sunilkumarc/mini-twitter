// var Root = React.createClass({
//   render : function() {
//     return (
//         <a href="/signup">SignUP</a>
//     );
//   }
// });
//
// React.render(<Root />, document.getElementById('mount-point'));

const Router = require('react-router'),
     { Route, RouteHandler, DefaultRoute } = Router;

let routes = (
    React.createElement(Route, {name: "signup", handler: SigUp})
);
