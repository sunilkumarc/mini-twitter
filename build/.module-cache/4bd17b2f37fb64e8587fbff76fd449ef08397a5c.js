var Root = React.createClass({displayName: "Root",
  render : function() {
    return Home;
  }
});

React.render(React.createElement(Root, null), document.body);
