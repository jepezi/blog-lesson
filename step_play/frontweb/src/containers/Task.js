import React, { Component, PropTypes } from 'react';

class Task extends Component {
  render() {
    return <div style={{padding: 10, backgroundColor: '#f1f1f1', marginBottom: 40}}>
      <h4 style={{marginTop: 0}}>Task:</h4>
      <p style={{margin: 0}}>{this.props.children}</p>
    </div>;
  }
}

export default Task;
