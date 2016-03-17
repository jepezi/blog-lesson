var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

// --------- loader ---------
var jsonloader = { test: /\.json$/, loader: 'json-loader' };
var imageloader = { test: /\.(jpe?g|png|gif)$/, loader: "file" };
var fontloader = { test: /\.(eot|ttf|wav|mp3|woff)$/, loader: 'file' };
var jsloader = {
  test: /\.js$/,
  exclude: /node_modules/,
  loader: 'babel',
  query: {
    presets: ['es2015-native-modules', 'react', 'stage-2'],
    plugins: [
      'transform-runtime',
      'transform-react-constant-elements', // optimize: constant first
      'transform-react-inline-elements' // optimize
    ],
  }
}
var jsloaderHot = {
  test: /.js$/,
  exclude: /node_modules/,
  loader: 'babel',
  query: {
    presets: ['es2015-native-modules', 'react', 'stage-2'],
    env: { // (3)
      development: {
        presets: ['react-hmre']
      }
    }
  }
}

var cssloaderDev = [
  {
    test: /\.module.s?css$/,
    loader:  'style!css?modules&importLoaders=1&sourceMap&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass?outputStyle=expanded&' + "includePaths[]=" + encodeURIComponent(path.resolve(__dirname, "../src/"))
  },
  {
    test: /^((?!\.module).)*css$/,
    loader: 'style!css!postcss!sass?outputStyle=expanded&sourceMap&' + "includePaths[]=" + encodeURIComponent(path.resolve(__dirname, "../src/"))
  }
];

var cssloaderExtract = [
  { test: /\.module.s?css$/, loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=2!postcss!sass?outputStyle=expanded&' +
      "includePaths[]=" + encodeURIComponent(path.resolve(__dirname, "../src/"))) },
  { test: /^((?!\.module).)*css$/, loader: ExtractTextPlugin.extract('style', 'css!postcss!sass?outputStyle=expanded&' +
      "includePaths[]=" + encodeURIComponent(path.resolve(__dirname, "../src/"))) },
];
var cssloaderPrerender = [
  { test: /\.module.s?css$/, loader:  'css/locals?modules&importLoaders=2!postcss!sass?outputStyle=expanded&' + "includePaths[]=" + encodeURIComponent(path.resolve(__dirname, "../src/")) },
  { test: /^((?!\.module).)*css$/, loader: 'css/locals!postcss!sass?outputStyle=expanded&' + "includePaths[]=" + encodeURIComponent(path.resolve(__dirname, "../src/")) },
];

var commonloaders = [
  jsloader,
  jsonloader,
  imageloader,
  fontloader
];

module.exports = {
  jsonloader: jsonloader,
  imageloader: imageloader,
  fontloader: fontloader,
  jsloader: jsloader,
  jsloaderHot: jsloaderHot,
  cssloaderDev: cssloaderDev,
  cssloaderExtract: cssloaderExtract,
  cssloaderPrerender: cssloaderPrerender,
  commonloaders: commonloaders,
}
