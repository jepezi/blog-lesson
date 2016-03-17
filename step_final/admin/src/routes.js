import React, { Component, PropTypes } from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App';
import Home from './containers/Home';

const NotFoundRoute = {
  path: '*',
  component: () => <div>Oops! Not Found</div>
}

const PostsRoute = {
  path: 'posts',
  getComponent: (location, cb) => {
    System.import("./containers/Posts").then(module => {
      cb(null, module.default)
    }).catch(err => {
      console.log("Chunk loading failed");
    });
  }
}

const PostRoute = {
  path: 'posts/:id',
  getComponent: (location, cb) => {
    System.import("./containers/Post").then(module => {
      cb(null, module.default)
    }).catch(err => {
      console.log("Chunk loading failed");
    });
  }
}

const PostNewRoute = {
  path: 'posts/new',
  getComponent(location, cb) {
    System.import("./containers/PostForm").then(module => {
      cb(null, module.default)
    }).catch(err => {
      console.log("Chunk loading failed");
    });
  }
}

const CommentsRoute = {
  path: 'comments',
  getComponent(location, cb) {
    System.import("./containers/Comments").then(module => {
      cb(null, module.default)
    }).catch(err => {
      console.log("Chunk loading failed");
    });
  }
}

const routes = {
  path: '/',
  component: App,
  indexRoute: { component: Home },
  childRoutes: [
    PostsRoute,
    PostNewRoute,
    PostRoute,
    CommentsRoute,
    NotFoundRoute
  ]
}

export default routes;
