import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import './assets/styles/normalize.css';

import {
    App,
    Home,
    Company,
    News,
    Join,
    Contact,
    Notice
} from './containers';

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="home" component={Home} />
            <Route path="company" component={Company} />
            <Route path="news" component={News} />
            <Route path="join" component={Join} />
            <Route path="contact" component={Contact} />
            <Route path="notice" component={Notice} />
        </Route>
    </Router>
), document.getElementById('app')); 