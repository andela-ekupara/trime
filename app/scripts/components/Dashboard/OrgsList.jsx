(function() {
  'use strict';
  var React = require('react');
  var OrgsList = React.createClass({
      render: function() {
        var renderOrg = function(org) {
          return (
            <div className="col s12 m4" key={org.id}>
              <div className="card teal darken-1">
                <div className="card-content white-text">
                  <span className="card-title">{org.name}</span>
                  <p>{org.description}</p>
                </div>
                <div className="card-action white-text">
                  <a href={'/orgs/' + org.id}> Projects</a>
                  <a href={'/orgs/' + org.id + '/users'}> Manage Users</a>
                </div>
              </div>
            </div>
          );
        };
        return (<div>{this.props.orgs.map(renderOrg)}</div>);
      }
});
  module.exports = OrgsList;
})();
