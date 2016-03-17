var fs = require('fs');
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var StatsPlugin = require("stats-webpack-plugin");
var webpackUtils = require('./webpackUtils');
var publicPath = '/dist/static/';

/*
  scriptConfig
  -------------------------------------------------------
  for the script tag on html.
  - main.js (with chunkhash)
  - vendor.js (with chunkhash)
  - main.css (with contenthash)
 */

var scriptConfig = {
  entry: {
    main: './src/main.js',
    vendor: ['react', 'react-dom', 'react-router', 'redux', 'react-redux'],
  },
  outputPath: path.join(__dirname, '../public/dist/static')
};


module.exports = [
  {
    // script ------------------------------------------------------
    devtool: 'source-map',
    context: path.resolve(__dirname, '..'),
    entry: scriptConfig.entry,
    output: {
      path: scriptConfig.outputPath,
      filename: '[name].js?[chunkhash]',
      chunkFilename: '[name].clientchunk.js?[chunkhash]',
      publicPath: publicPath
    },
    module: {
      loaders: [].concat(webpackUtils.commonloaders, webpackUtils.cssloaderExtract)
    },
    plugins: [
      new StatsPlugin('../../../webpack-stats.json', {
        // chunkModules: true,
        chunks: false,
        modules: false,
      }),
      new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: '[name].js?[chunkhash]' }),
      new ExtractTextPlugin('[name].css?[contenthash]', {allChunks: true}),
      new webpack.DefinePlugin({
        'process.env': { NODE_ENV: JSON.stringify('production') },
        __CLIENT__: true,
        __SERVER__: false,
        __DEVELOPMENT__: false,
      }),
      // optimizations
      new webpack.optimize.DedupePlugin(),
      new webpack.LoaderOptionsPlugin({ minimize: true, debug: false }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        },
        sourceMap: false
      })
    ]
  }
];
