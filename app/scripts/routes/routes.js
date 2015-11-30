var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;



module.exports = (
	<Route path="/" handler={require('../components/main.jsx')}>
		<DefaultRoute handler={require('../components/landing.jsx')} />
		<Route name="login" path="/start_triming" handler={require('../components/login.jsx')} />
		<Route name="test" path="/test" handler={require('../components/test.jsx')} />
	</Route>
	);

