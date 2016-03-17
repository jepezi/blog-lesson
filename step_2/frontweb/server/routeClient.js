// Renderer has only 1 method, render(req, cb)
const RendererClass = __DEVELOPMENT__
  ? require('./renderer/simplerenderer.js')
  : require('../public/dist/prerenderer/main.js');

// TODO: Create stat object based on env.
// if dev, use hotStat
// if prod, use stat from 'webpack-stats.json'
// stat's shape { publicPath, assetsByChunkName }


// TODO: Create RendererClass instance.
// RendererClass constructor accepts option obj, with 3 keys.
// cssUrl, scriptUrl, vendorUrl

const renderer = new RendererClass({
  // option obj derived from stat
});

module.exports = function renderClient(req, res) {
  // TODO: render our app
  // 
  // renderer.render(req, ...)
};
