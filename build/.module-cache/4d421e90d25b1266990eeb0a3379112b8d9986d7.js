var React = require('react.js');

var root = React.createClass({displayName: "root",
  render : function() {
    return React.createElement("h1", null, " Home");
  }
});

React.render(React.createElement("root", null), document.getElementById('mount-point'));
