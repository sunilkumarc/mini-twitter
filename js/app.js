var Root = React.createClass({
  render : function() {
    return (
        <a href="/signup">SignUP</a>
    );
  }
});

React.render(<Root />, document.getElementById('mount-point'));
