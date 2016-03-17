var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var webpackUtils = require('./webpackUtils');
var APPPATH = path.resolve(__dirname, '..');

module.exports = {
  entry: {
    main: [
      'webpack-hot-middleware/client', // TODO: add 'path' query
      path.join(APPPATH, 'src/main.js')
    ]
  },
  output: {
    path: path.join(APPPATH, 'public', 'dist'),
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    publicPath: '/dist/', // TODO: change host to match hotServer
  },
  module: {
    loaders: [
      webpackUtils.jsloaderHot,
      webpackUtils.jsonloader
    ] // TODO: add css loader
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
  // TODO: add postcss's autoprefixer
};
