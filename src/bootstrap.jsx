import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import {Router, Route, Link, RouteHandler, hashHistory, browserHistory} from 'react-router';
import { IntlProvider } from 'react-intl';


import HomePage from './components/HomePage';

var locale = navigator ? navigator.language || navigator.browserLanguage : 'en-US';

const renderTree = (
        <Router history={browserHistory}>
          <Route>
            <Route name="index" path="/" component={ HomePage }/>
            <intercept-url pattern="/favicon.ico" access="ROLE_ANONYMOUS" />
          </Route>
        </Router>
);


ReactDOM.render(renderTree, document.querySelector("#client"));
