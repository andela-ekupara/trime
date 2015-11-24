var React = require('react'),
AppBar = require('material-ui').AppBar,
Greeting = React.createClass({
  render: function() {
    return (
        <AppBar
          title="TRIME" />);
  }
});

module.exports = Greeting;
