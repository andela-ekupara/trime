(function() {
	'use strict';

	var React = require('react'),
		Router = require('react-router'),
		DefaultRoute = Router.DefaultRoute,
		Route = Router.Route,
		RouteHandler = Router.RouteHandler,
		Redirect = Router.Redirect;

	module.exports = (
		<Route>
			<Redirect from="/" to="/landing-page" />
			<Route name="landing" path="/landing-page" handler={require('./components/landing-page/main.jsx')}>
				<DefaultRoute handler={require('./components/landing-page/landing.jsx')} />
				<Route path="/join" handler={require('./components/login/SignupPage.jsx')} />
        <Route path="/orgs" handler={require('./components/org-page/index.jsx')} />
        <Route path="/dashboard" handler={require('./components/dashboard/index.jsx')} />
			</Route>
		</Route>
	);
})();


