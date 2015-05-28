var Root = React.createClass({displayName: "Root",
  render : function() {
    return React.createElement("h1", null, "Home");
  }
});

React.render(React.createElement(Root, null), document.getElementById('mount-point'));
