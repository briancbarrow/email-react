// require('babel-polyfill');
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import App from './components/app';
import Sidenav from './components/sidenav';
import Email from './components/email';
import EmailList from './components/email-list';

const routes = (
    <Router history={hashHistory}>
        <Route path="/mail" component={App}>            
            <Route path=":mailBox" component={EmailList} />
            <Route path=":mailBox/:emailId" component={Email} />
        </Route>
    </Router>
);

document.addEventListener('DOMContentLoaded', () => 
    ReactDOM.render(routes, document.getElementById('app'))
);
