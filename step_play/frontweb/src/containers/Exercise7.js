import 'isomorphic-fetch';
import React, { Component, PropTypes } from 'react';
import Task from './Task';

class Exercise7 extends Component {
  render() {
    return <div>
      <h1>Exercise 7: Load data and array map (isomorphic-fetch)</h1>
      <Task>load ข้อมูลจาก <a href="http://reacttraining.multiplej.com/api/v1/posts" target="_blank">http://reacttraining.multiplej.com/api/v1/posts</a> แล้วแสดงผล 5 ผลลัพธ์ใน ul li ด้านล่างนี้ <strong>โดยใช้ isomorphic-fetch</strong></Task>

      <p style={{backgroundColor: '#ffaaaa'}}>Hint: ใช้ fetch api, setState และ array map</p>

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

export default Exercise7;
