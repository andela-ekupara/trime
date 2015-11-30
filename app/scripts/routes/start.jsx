var React = require('react');
var Router = require('react-router');
var StartHere = React.createClass({
	render: function() {
		return(
			<div>
			<Router.Link> to="entry" params={{entryId: 1}}>Entry 1</Router.Link>
			</div>
			);
	}
});

module.exports = StartHere;
