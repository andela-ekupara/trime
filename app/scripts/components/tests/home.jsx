(function() {
	var React = require('react'),
		RouteHandler = require('react-router').RouteHandler;
		

		var Main = React.createClass({
			render: function() {
				return (
					<div>
						<h1>Blase Blase</h1>
						<div className="handler">
							<RouteHandler />
						</div>
					</div>
				);
			}
		});

		module.exports = Main;
})();
