import React, { Component, PropTypes } from 'react';
import Task from './Task';

class Exercise5 extends Component {
  render() {
    return <div>
      <h1>Exercise 5: Context</h1>
      <Task>แสดงผล appname จาก context ใน h2 ด้านล่างนี้</Task>
      <Task>แสดงผล secret จาก context ใน h2 ด้านล่างนี้</Task>

      {/* exercise */}
      <h2>App name is [appname]</h2>
      <h2>App secret is [secret]</h2>
    </div>;
  }
}

export default Exercise5;
