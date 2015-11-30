var React = require('react'),
AppBar = require('material-ui').AppBar,
RouteHandler =require('react-router').RouteHandler,
Header = React.createClass({
  render: function() {
    return (
				<div id="header">
				  <div id="nav">
				    <div className="mdl-grid">
				      <div className="mdl-cell mdl-cell--8-col">
				        <ul>
				          <li className="login">TRIME  </li>
				          <li className="right btn-start"><a href="#">Start Triming</a></li>
				        </ul>
				      </div>
				    </div>
				  </div>
				</div>
        );
  }
});

module.exports = Header;
