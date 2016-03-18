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
      // NOTE: Handle redirect
      if (redirectLocation) {
        let redirectPath = redirectLocation.pathname + redirectLocation.search;
        if (redirectLocation.state && redirectLocation.state.intend) {
          redirectPath += '?intend=' + redirectLocation.state.intend;
        }
        callback(null, redirectPath, null);
        return;
      }

      // NOTE: Handle error
      if (error) {
        if (error.redirect) {
          callback(null, error.redirect, null);
          return;
        }

        callback({ message: error.stack }, null, null);
        return;
      }

      // prefetch & hydrate store
      const { params, location, components } = renderProps;

      // TODO: Fetch data
      // NOTE:
      // - Filter only components that have 'fetchData' static method
      // - Collect all fetchData methods into array (reducer operation)
      // - Map over array and call every methods, save the returned promises.

      // TODO: Wait for data, then renderToString and callback with markup
      // - Wait for all promises.
      // - then use `renderToString` to render Provider with hydrated store and RoutingContext with spreaded renderProps, inject it into html (__CONTENT__)
      // - get redux state and inject it into html (__DATA__)
      // - callback up to routeClient
    });
  }
}

module.exports = MainRenderer;
