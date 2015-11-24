(function() {
  var React = require('react');
  var ReactDOM = require('react-dom');
  var Header = require('./components/header.jsx'); // Our custom react component
 
  window.React = React;

  ReactDOM.render( <Header/> ,
    document.getElementById('header'));

  ReactDOM.render( <Login/> ,
    document.getElementById('login'));

})();
