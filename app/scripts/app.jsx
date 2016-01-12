(function() {
  'use strict';

  var React = require('react'),
    ReactDOM = require('react-dom'),
    ReactRouter = require('react-router'),
    Router = ReactRouter.Router,
    IndexRoute = ReactRouter.IndexRoute,
    Route = ReactRouter.Route,
    createBrowserHistory = require('history/lib/createBrowserHistory'),
    Redirect = ReactRouter.Redirect;

  ReactDOM.render((
    <Router history={createBrowserHistory()}>
      <Route path="/" component={require('./components/landing-page/main.jsx')} >
        <IndexRoute component={require('./components/landing-page/landing.jsx')} />
        <Route path="/join" component={require('./components/login/SignupPage.jsx')} />
        <Route path="/dashboard" component={require('./components/dashboard/index.jsx')} />
        <Route path="/orgs" component={require('./components/org-page/index.jsx')} />
        <Route path="/orgs/:orgId" component={require('./components/OrgProjects/index.jsx')} />
        <Route path="/orgs/:orgId/users" component={require('./components/OrgUsers/index.jsx')} />
        <Route path="/projects" component={require('./components/CreateProject/index.jsx')} />
        <Route path="/starttrime" component={require('./components/start-trime/trime-page.jsx')} />
        <Route path="*" component={require('./components/notfound/index.jsx')} />
        <Redirect from="about" to="landing" />
        <Redirect from="sign" to="/join" />
      </Route>
    </Router>
    ), document.getElementById('ui-view'));
})();
