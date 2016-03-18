import React, { Component, PropTypes } from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App';
import Home from './containers/Home';
import Exercise1 from './containers/Exercise1';
import Exercise2 from './containers/Exercise2';
import Exercise3 from './containers/Exercise3';
import Exercise4 from './containers/Exercise4';
import Exercise5 from './containers/Exercise5';
import Exercise6 from './containers/Exercise6';
import Exercise7 from './containers/Exercise7';
import Exercise8 from './containers/Exercise8';

const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={Home}/>
    <Route path='exercise1' component={Exercise1} />
    <Route path='exercise2' component={Exercise2} />
    <Route path='exercise3' component={Exercise3} />
    <Route path='exercise4' component={Exercise4} />
    <Route path='exercise5' component={Exercise5} />
    <Route path='exercise6' component={Exercise6} />
    <Route path='exercise7' component={Exercise7} />
    <Route path='exercise8' component={Exercise8} />
  </Route>
);

export default routes;
