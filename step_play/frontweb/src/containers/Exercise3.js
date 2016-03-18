import React, { Component, PropTypes } from 'react';
import Task from './Task';

class Exercise3 extends Component {
  render() {
    return <div>
      <h1>Exercise 3: State</h1>
      <Task>คลิกที่ปุ่มแล้ว toggle รูปภาพ</Task>

      {/* exercise */}
      <button>Toggle</button>

      <div>
        <h3>Show/hide me when toggle button</h3>
        <img src="http://p.fod4.com/p/media/undefined/YH7jUCmzTFWRbu8qBYug_Escalator%20Arm.gif" alt=""/>
      </div>
    </div>;
  }
}

export default Exercise3;
