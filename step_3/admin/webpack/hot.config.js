var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var webpackUtils = require('./webpackUtils');
var APPPATH = path.resolve(__dirname, '..');

// export webpack config object.
module.exports = {
  entry: {
    admin: [
      // TODO: change port
      'webpack-hot-middleware/client?path=http://localhost:3001/__webpack_hmr',
      path.join(APPPATH, 'src/main.js')
    ]
  },
  output: {
    path: path.join(APPPATH, 'public', 'dist'),
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    // TODO: change port
    publicPath: 'http://localhost:3001/dist/',
  },
  module: {
    loaders: [
      webpackUtils.jsloaderHot,
      webpackUtils.jsonloader
    ].concat(webpackUtils.cssloaderDev)
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ]
};
