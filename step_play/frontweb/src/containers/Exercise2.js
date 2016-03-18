import React, { Component, PropTypes } from 'react';
import Task from './Task';

// NOTE:
// PrimaryButton code goes here
// Write it in stateless functional component style

class Exercise2 extends Component {
  render() {
    return <div>
      <h1>Exercise 2: Stateless functional component</h1>
      <Task>เปลี่ยน button ให้เป็น "PrimaryButton" stateless functional component ที่มี class "btn btn-primary"</Task>
      <Task>เมื่อคลิกแล้ว ให้ console.log('Clicked!')</Task>

      {/* exercise */}
      <button>Chamge me</button>
    </div>;
  }
}

export default Exercise2;
