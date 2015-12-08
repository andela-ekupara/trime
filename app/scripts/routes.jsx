(function() {
	'use strict';
	var React = require('react');
	var Router = require('react-router');
	var DefaultRoute = Router.DefaultRoute;
	var Route = Router.Route;
	var RouteHandler = Router.RouteHandler;
	var Redirect = Router.Redirect;


	var routes =  (
		<Route>
			<Redirect from="/" to="/landing-page" />
			<Route name="landing" path="/landing-page" handler={require('./components/landing-page/main.jsx')}>
				<DefaultRoute handler={require('./components/landing-page/landing.jsx')} />
        <Route path="/orgs" handler={require('./components/org-page/orgs-page.jsx')} />
			</Route>
			<Route path="/login" handler={require('./components/login/login-page.jsx')}>
				<DefaultRoute handler={require('./components/login/signupForm.jsx')} />
			</Route>
			<Route path="/user" handler={require('./components/tests/login-page.js')} />
				
		</Route>
	);
	module.exports = routes;
})();
