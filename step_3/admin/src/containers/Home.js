import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../redux/modules/posts';

class Home extends Component {
  componentDidMount() {
    // TODO: fetch all posts
  }

  render() {
    // TODO: loading

    // TODO: shows number of posts
  }
}

// TODO: write mapState function to map redux state to `posts` props.

export default connect(mapState)(Home);
