(function() {
  'use strict';

  var React = require('react'),
    ReactDOM = require('react-dom'),
    ReactRouter = require('react-router'),
    Router = ReactRouter.Router,
    IndexRoute = ReactRouter.IndexRoute,
    Route = ReactRouter.Route,
    CreateProject = require('./components/CreateProject/index.jsx'),
    Dashboard = require('./components/Dashboard/index.jsx'),
    Main = require('./components/LandingPage/Main.jsx'),
    Landing = require('./components/LandingPage/Landing.jsx'),
    OrgProjects = require('./components/OrgProjects/index.jsx'),
    OrgUsers = require('./components/OrgUsers/index.jsx'),
    ProjectUsers = require('./components/ProjectUsers/index.jsx'),
    SignUp = require('./components/Login/SignupPage.jsx'),
    OrgPage = require('./components/OrgPage/index.jsx'),
    TrimePage = require('./components/StartTrime/index.jsx'),
    NotFound = require('./components/NotFoundPage/index.jsx'),
    createBrowserHistory = require('history/lib/createBrowserHistory'),
    Redirect = ReactRouter.Redirect;

  ReactDOM.render((
    <Router history={createBrowserHistory()}>
      <Route path="/" component={Main} >
        <IndexRoute component={Landing} />
        <Route path="/join" component={SignUp} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/orgs" component={OrgPage} />
        <Route path="/orgs/:orgId" component={OrgProjects} />
        <Route path="/orgs/:orgId/users" component={OrgUsers} />
        <Route path="/orgs/:orgId/projects" component={CreateProject} />
        <Route path="/orgs/:orgId/projects/:projectId/users" component={ProjectUsers} />
        <Route path="/starttrime" component={TrimePage} />
        <Route path="*" component={NotFound} />
        <Redirect from="about" to="landing" />
        <Redirect from="sign" to="/join" />
      </Route>
    </Router>
    ), document.getElementById('ui-view'));
})();
