import React, { Component, PropTypes } from 'react';
import { Router, browserHistory, Link } from 'react-router';

class Home extends Component {
  render() {
    return <ul>
      <li><Link to="exercise1">Exercise1</Link></li>
      <li><Link to="exercise2">Exercise2</Link></li>
      <li><Link to="exercise3">Exercise3</Link></li>
      <li><Link to="exercise4">Exercise4</Link></li>
      <li><Link to="exercise5">Exercise5</Link></li>
      <li><Link to="exercise6">Exercise6</Link></li>
      <li><Link to="exercise7">Exercise7</Link></li>
      <li><Link to="exercise8">Exercise8</Link></li>
    </ul>;
  }
}

export default Home;
