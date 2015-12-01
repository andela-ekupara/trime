(function() {
	var React = require('react'),
		RouteHandler = require('react-router').RouteHandler,
		Header = require('./header.jsx');
		

		var Main = React.createClass({
			render: function() {
				return (
					<div>
						<Header />
						<div className="handler">
							<RouteHandler />
						</div>
					</div>
				);
			}
		});

		module.exports = Main;
})();
