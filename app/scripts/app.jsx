(function() {
  'use strict';

  var React = require('react'),
    ReactDOM = require('react-dom'),
    ReactRouter = require('react-router'),
    Router = ReactRouter.Router,
    IndexRoute = ReactRouter.IndexRoute,
    Route = ReactRouter.Route,
    CreateProject = require('./Components/CreateProject/index.jsx'),
    Dashboard = require('./Components/Dashboard/index.jsx'),
    Main = require('./Components/LandingPage/Main.jsx'),
    Landing = require('./Components/LandingPage/Landing.jsx'),
    OrgProjects = require('./Components/OrgProjects/index.jsx'),
    OrgUsers = require('./Components/OrgUsers/index.jsx'),
    ProjectUsers = require('./Components/ProjectUsers/index.jsx'),
    SignUp = require('./Components/Login/SignupPage.jsx'),
    OrgPage = require('./Components/OrgPage/index.jsx'),
    TrimePage = require('./Components/StartTrime/TrimePage.jsx'),
    NotFound = require('./Components/NotFoundPage/index.jsx'),
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
