const express = require('express');
const webpack = require('webpack');
const devPort = 3001; // TODO: Change port

const webpackConfig = require('../webpack/hot.config');
const compiler = webpack(webpackConfig);
const serverOptions = {
  noInfo: true,
  lazy: false,
  publicPath: webpackConfig.output.publicPath,
  // watchOptions: { aggregateTimeout: 2000, poll: 1000 },
  headers: { 'Access-Control-Allow-Origin': '*' },
  stats: { colors: true }
};

const app = express();

app.use(require('webpack-dev-middleware')(compiler, serverOptions));
app.use(require('webpack-hot-middleware')(compiler));

app.listen(devPort, function onAppListening(err) {
  if (err) {
    console.error(err);
  } else {
    console.info('==> 🚧  Webpack development server listening on port %s', devPort);
  }
});
