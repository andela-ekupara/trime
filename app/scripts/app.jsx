(function() {
  var React = require('react');
  var ReactDOM = require('react-dom');
  var ReactRouter = require('flux-react-router');

  var Header = require('./components/header.jsx'); // Our custom react component
  var Login = require('./components/modal-login.jsx'); // Login page


  window.React = React;

  ReactDOM.render( <Header/> ,
    document.getElementById('header'));

  ReactDOM.render( <Login/> ,
    document.getElementById('login'));

})();
