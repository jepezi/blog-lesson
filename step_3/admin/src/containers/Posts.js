import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { getPosts } from '../redux/modules/posts';
import s from './Posts.module.scss';

class Posts extends Component {
  componentDidMount() {
    // TODO: fetch all posts
  }

  render() {
    // TODO: loading

    // TODO: render all posts
  }
}

// TODO: write mapState function to map redux state to `posts` props.
// And also loading flag too,

export default connect(mapState)(Posts);
