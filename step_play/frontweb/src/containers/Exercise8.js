import React, { Component, PropTypes } from 'react';
import Task from './Task';

class Exercise8 extends Component {
  render() {
    return <div>
      <h1>Exercise 8: Dynamic Route</h1>
      <Task>ใน routes.js, เปลี่ยน Static Route เป็น Dynamic Route</Task>

      <p style={{backgroundColor: '#ffaaaa'}}>Hint: ใน routes.js, เขียน route ด้วย <strong>route object</strong> และใช้ code splitting ของ webpack 2  <a href="https://gist.github.com/sokra/27b24881210b56bbaff7#code-splitting-with-es6" target="_blank">What's new in webpack 2</a></p>
    </div>;
  }
}

export default Exercise8;
