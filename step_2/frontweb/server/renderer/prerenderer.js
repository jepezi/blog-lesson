import path from 'path';
import { readFileSync } from 'fs';
import React from 'react/dist/react.min';
import ReactDOMServer from 'react-dom/dist/react-dom-server.min'; // optimize: use minified react
import { Provider } from 'react-redux';
import serialize from 'serialize-javascript';
import { RoutingContext, match } from 'react-router';

import configureStore from '../../src/redux/configureStore';
import routes from '../../src/routes';
const markup = readFileSync(
  path.resolve(process.cwd(), 'step_final/frontweb/public/prerender.html'),
  'utf-8'
);

class MainRenderer {
  constructor(options) {
    this.html = markup
      .replace('__CSS__', options.cssUrl)
      .replace('__VENDOR__', options.vendorUrl)
      .replace('__SCRIPT__', options.scriptUrl);
  }

  render(req, callback) {
    const store = configureStore();

    match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
      // TODO:
      // - handle redirect
      // - error
      // - fetch data
      // - renderToString and callback with markup
    });
  }
}

module.exports = MainRenderer;
