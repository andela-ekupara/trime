(function() {
  'use strict';

  var React = require('react'),
    ReactDOM = require('react-dom'),
    ReactRouter = require('react-router'),
    Router = ReactRouter.Router,
    IndexRoute = ReactRouter.IndexRoute,
    Route = ReactRouter.Route,
    Main = require('./components/landing-page/main.jsx'),
    Landing = require('./components/landing-page/landing.jsx'),
    SignUp = require('./components/login/SignupPage.jsx'),
    Index = require('./components/org-page/index.jsx'),
    TrimePage = require('./components/start-trime/trime-page.jsx'),
    NotFound = require('./components/notfound-page/index.jsx'),
    createBrowserHistory = require('history/lib/createBrowserHistory'),
    Redirect = ReactRouter.Redirect;

  ReactDOM.render((
    <Router history={createBrowserHistory()}>
      <Route path="/" component={Main} >
        <IndexRoute component={Landing} />
        <Route path="/join" component={SignUp} />
        <Route path="/orgs" component={Index} />
        <Route path="/starttrime" component={TrimePage} />
        <Route path="*" component={NotFound} />
        <Redirect from="about" to="landing" />
        <Redirect from="sign" to="/join" />
      </Route>
    </Router>
    ), document.getElementById('ui-view'));
})();
