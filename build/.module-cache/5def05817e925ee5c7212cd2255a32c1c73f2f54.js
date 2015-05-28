var Root = React.createClass({displayName: "Root",
  render : function() {
    return React.createElement("h1", null, "Welcom To Twitter");
  }
});

React.render(React.createElement(Root, null), document.getElementById('mount-point'));
