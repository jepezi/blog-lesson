import React, { Component, PropTypes } from 'react';
import Task from './Task';

class Exercise4 extends Component {
  render() {
    return <div>
      <h1>Exercise 4: Focus text input</h1>
      <Task>focus กล่องข้อความโดยใช้ Component Life Cycle</Task>

      <input
        type="text"
        placeholder="focus me pls"
      />
    </div>;
  }
}

export default Exercise4;
