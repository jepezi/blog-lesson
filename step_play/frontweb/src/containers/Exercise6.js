import React, { Component, PropTypes } from 'react';
import Task from './Task';

class Exercise6 extends Component {
  render() {
    return <div>
      <h1>Exercise 6: Load data and array map (jquery)</h1>
      <Task>load ข้อมูลจาก <a href="http://reacttraining.multiplej.com/api/v1/posts" target="_blank">http://reacttraining.multiplej.com/api/v1/posts</a> แล้วแสดงผล 5 ผลลัพธ์ใน ul li ด้านล่างนี้</Task>

      <p style={{backgroundColor: '#ffaaaa'}}>Hint: ใช้ $.getJSON(), setState และ array map</p>

    {/* exercise */}
      <ul>
        <li>post title 1</li>
        <li>post title 2</li>
        <li>post title 3</li>
        <li>post title 4</li>
        <li>post title 5</li>
      </ul>
    </div>;
  }
}

export default Exercise6;
