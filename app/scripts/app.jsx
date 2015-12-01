(function() {
	'use strict';

	var React = require('react'),
		Router = require('react-router'),
		routes = require('./routes');
		
	Router.run(routes, function (Root) {
		React.render(<Root />, document.getElementById('card'));
	});

})();
