import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class App extends Component {
  getChildContext() {
    return {
      appname: this.props.appname,
      secret: 'THERE IS NO SECRET'
    }
  }

  render() {
    const { appname } = this.props;

    return (
      <div style={{padding: 30}}>
        <Link to="/"><h1 style={{fontWeight: 300}}>{appname}</h1></Link>
        {this.props.children}
      </div>
    )
  }
}

App.childContextTypes = {
  appname: PropTypes.string,
  secret: PropTypes.string
}
App.defaultProps = {
  appname: 'React Training',
};
App.propTypes = {
  appname: PropTypes.string,
};

export default App;
