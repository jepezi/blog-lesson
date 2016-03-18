import path from 'path';
import { readFileSync } from 'fs';
// import React from 'react';
import React from 'react/dist/react.min';
// import { renderToString } from 'react-dom/server';
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
      if (redirectLocation) {
        let redirectPath = redirectLocation.pathname + redirectLocation.search;
        if (redirectLocation.state && redirectLocation.state.intend) {
          redirectPath += '?intend=' + redirectLocation.state.intend;
        }
        callback(null, redirectPath, null);
        return;
      }

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

      const prefetchMethods = components
        .filter(c => c.fetchData)
        .reduce((acc, c) => acc.concat(c.fetchData), []);

      const promises = prefetchMethods
        .map(prefetch => prefetch(store, params, location));

      // wait for fetched state data in store
      Promise.all(promises)
        .then(() => {
          // all fetched data is done
          // render our components to string
          const __CONTENT__ = ReactDOMServer.renderToString(
            <Provider store={store}>
              <RoutingContext {...renderProps}/>
            </Provider>
          );

          // store state into variable
          const __DATA__ = store.getState();

          const page = this.html
            .replace('__DATA__', serialize(__DATA__))
            .replace('__CONTENT__', __CONTENT__);

          callback(null, null, page);
        })
    });
  }
}

module.exports = MainRenderer;
