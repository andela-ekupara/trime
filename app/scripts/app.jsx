(function() {
	'use strict';

	var React = require('react'),
		ReactDOM = require('react-dom'),
		ReactRouter = require('react-router'),
		Router = ReactRouter.Router,
		IndexRoute = ReactRouter.IndexRoute,
		Route = ReactRouter.Route,
		browserHistory = ReactRouter.browserHistory,
		Redirect = ReactRouter.Redirect;

	ReactDOM.render((
		<Router history={browserHistory}>
			<Route path="/" component={require('./components/landing-page/main.jsx')} >
				<IndexRoute component={require('./components/landing-page/landing.jsx')} />
				<Route path="/join" component={require('./components/login/SignupPage.jsx')} />
        <Route path="/orgs" component={require('./components/org-page/orgs-page.jsx')} />
        <Route path="/starttrime" component={require('./components/start-trime/trime-page.jsx')} />
        <Route path="*" component={require('./components/notfound/notfound.jsx')} />
        <Redirect from="about" to="landing" />
        <Redirect from="sign" to="/join" />
			</Route>
		</Router>
		), document.getElementById('ui-view'));

})();
