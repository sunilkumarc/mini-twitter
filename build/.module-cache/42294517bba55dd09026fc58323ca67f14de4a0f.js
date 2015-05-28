var root = React.createClass({displayName: "root",
  render : function() {
    return (
      React.createElement("h1", null, "Home")
    );
  }
});

React.render(root, document.getElementById('mount-point'));
