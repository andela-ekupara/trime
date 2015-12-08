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
			<Route path="/landing-page" handler={require('./components/landing-page/main.jsx')}>
				<DefaultRoute handler={require('./components/landing-page/landing.jsx')} />
        <Route path="/orgs" handler={require('./components/orgForm.jsx')} />
        <Route path="/dashboard" handler={require('./components/orgForm.jsx')} />
			</Route>
			<Route path="/login" handler={require('./components/login/login-page.jsx')}>
				<DefaultRoute handler={require('./components/login/signupForm.jsx')} />
				<Route path="/user" handler={require('./components/tests/login-page.js')} />
			</Route>
				
		</Route>
	);
	module.exports = routes;
})();
