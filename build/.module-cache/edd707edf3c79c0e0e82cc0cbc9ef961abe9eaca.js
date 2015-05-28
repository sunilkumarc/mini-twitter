var root = React.createClass({displayName: "root",
  render : function() {
    return Home;
  }
});

React.render(React.createElement("root", null), document.getElementById('mount-point'));
