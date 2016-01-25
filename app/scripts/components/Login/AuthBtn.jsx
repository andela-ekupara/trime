(function() {
  'use strict';

 var React = require('react');

  module.exports = React.createClass({
    render: function() {
      return (
        <div>
          <p>or</p>
          <div className="row">
            <a href="/auth/github" className="waves-effect waves-light btn">
              <i className="fa fa-github"></i>
              GitHub</a>&nbsp;
            <a href="/auth/google" className="waves-effect waves-light btn">
              <i className="fa fa-google"></i>
              Google</a>
          </div>
        </div>
        );
    }
  });

})();