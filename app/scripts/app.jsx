(function() {
	'use strict';

	var React = require('react'),
		ReactDOM = require('react-dom'),
		Router = require('react-router'),
		routes = require('./routes/routes');
		
	Router.run(routes, function (Root) {
		ReactDOM.render(<Root />, document.getElementById('card'));
	});

})();
