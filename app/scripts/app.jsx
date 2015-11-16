(function() {
  var React = require('react');
  var ReactDOM = require('react-dom');
  
  var Header = require('./components/header.jsx'); // Our custom react component
  var Card = require('./components/card.jsx'); //Card
  var Grid = require('./components/grid.jsx');

  window.React = React;
  ReactDOM.render(
  	<Header />, 
  	document.getElementById('header'));

  // ReactDOM.render(<Card/>, document.getElementById('card'));

  //window.React = React;
  ReactDOM.render(
  	<Grid />, 
  	document.getElementById('grid'));
})();
