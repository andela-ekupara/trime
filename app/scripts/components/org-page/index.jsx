(function() {
  'use strict';
  var React = require('react');
  var OrgForm = require('./OrgForm.jsx');

  var OrgPage = React.createClass({
    render: function() {
      return (
        <div>
          <OrgForm />
        </div>
      );
    }
  });

  module.exports = OrgPage;
})();
