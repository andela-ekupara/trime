(function() {
  'use strict';
  var React = require('react');
  var OrgsList = React.createClass({
      render: function() {
        var renderOrg = function(org) {
          return (
            <div className="col s12 m4">
              <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                  <span className="card-title">{org.name}</span>
                  <p>{org.description}</p>
                </div>
                <div className="card-action">
                  <a href="#">This is a link</a>
                </div>
              </div>
            </div>
          );
        };
        return (<div>{this.props.orgs.slice(0,3).map(renderOrg)}</div>)
      }
});
  module.exports = OrgsList;
})();