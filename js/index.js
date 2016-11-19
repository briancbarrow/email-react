require('babel-polyfill');
var React = require('react');
var ReactDOM = require('react-dom');
var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
var hashHistory = router.hashHistory;
var App = require('./components/app');
var Sidenav = require('./components/sidenav');
var Email = require('./components/email');
var EmailList = require('./components/email-list');
var IndexRoute = router.IndexRoute;

var routes = (
    <Router history={hashHistory}>
        <Route path="/mail" component={App}>            
            <Route path=":mailBox" component={EmailList} />
            <Route path=":mailBox/:emailId" component={Email} />
        </Route>
    </Router>
);

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(routes, document.getElementById('app'));
});

// <Route path=":contactId" component={ContactContainer} />
// <Route component={SideNavContainer} />