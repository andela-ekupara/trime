(function() {
	'use strict';

	var React = require('react'),
		Router = require('react-router'),
		DefaultRoute = Router.DefaultRoute,
		Route = Router.Route,
		RouteHandler = Router.RouteHandler,
		Redirect = Router.Redirect;

  module.exports = (
    <Route path='/' name='landing' handler={require('./components/landing-page/main.jsx')} >
      <DefaultRoute handler={require('./components/landing-page/landing.jsx')} />
      <Route path="/join" handler={require('./components/login/SignupPage.jsx')} />
      <Route path="/dashboard" handler={require('./components/dashboard/index.jsx')} />
      <Route path="/orgs" name='orgs'>
        <DefaultRoute handler={require('./components/dashboard/index.jsx')} />
        <Route path=":orgId" handler={require('./components/OrgProjects/index.jsx')} />
      </Route>
    </Route>
  );
})();


