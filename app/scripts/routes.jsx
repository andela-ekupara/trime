(function() {
	'use strict';

	var React = require('react'),
		Router = require('react-router'),
		DefaultRoute = Router.DefaultRoute,
		Route = Router.Route,
		NotFoundRoute = Router.NotFoundRoute,
		Redirect = Router.Redirect;

	module.exports = (
		<Route>
			<Route name="landing" path="/" handler={require('./components/landing-page/Main.jsx')} >
				<DefaultRoute handler={require('./components/landing-page/Landing.jsx')} />
				<Route path="/join" handler={require('./components/login/SignupPage.jsx')} />
        <Route path="/orgs" handler={require('./components/org-page/orgs-page.jsx')} />
        <NotFoundRoute handler={require('./components/notfound/notfound.jsx')} />
        <Redirect from="about" to="landing" />
        <Redirect from="sign" to="/join" />
			</Route>
		</Route>
	);
})();
