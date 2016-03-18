import React, { Component, PropTypes } from 'react';
import Task from './Task';

class CoolImage extends Component {
  render() {
    return (
      <p style={{color: 'red'}}>I am CoolImage. Change me to img tag that renders image src from props.</p>
    )
  }
}

CoolImage.defaultProps = {
  url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/React.js_logo.svg/2000px-React.js_logo.svg.png',
};

class Exercise1 extends Component {
  render() {
    return <div>
      <h1>Exercise 1: Pass Props</h1>
      <Task>สร้าง CoolImage component ที่แสดงผลรูปภาพและรับ props ชื่อ url จากนั้นลองส่ง url ตัวอย่างด้านล่างนี้เข้าไปเพื่อแแสดงผล <pre><code>http://p.fod4.com/p/media/undefined/YH7jUCmzTFWRbu8qBYug_Escalator%20Arm.gif</code></pre></Task>

      <Task>เสร็จแล้ว เพิ่ม props เพื่อกำหนดสีขอบและความหนาขอบของรูปภาพ</Task>

      {/* exercise */}
      <CoolImage />
    </div>;
  }
}

export default Exercise1;
