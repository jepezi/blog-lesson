// Renderer has only 1 method, render(req, cb)
const RendererClass = __DEVELOPMENT__
  ? require('./renderer/simplerenderer.js')
  : require('../public/dist/prerenderer/main.js');

const hotStat = {
  publicPath: 'http://localhost:3001/dist/',
  assetsByChunkName: {
    main: 'main.js'
  }
};

const stat = __DEVELOPMENT__
  ? hotStat
  : require('../webpack-stats.json');

const renderer = new RendererClass({
  cssUrl: stat.publicPath + [].concat(stat.assetsByChunkName.main)[1],
  scriptUrl: stat.publicPath + [].concat(stat.assetsByChunkName.main)[0],
  vendorUrl: stat.publicPath + [].concat(stat.assetsByChunkName.vendor)[0],
});

module.exports = function renderClient(req, res) {
  renderer.render(req, (err, redirect, html) => {
    if (err) {
      res.statusCode = 500;
      res.contentType = 'text; charset=utf8';
      res.end(err.message);
      return;
    }
    if (redirect) {
      res.redirect(301, redirect);
      return;
    }

    res.contentType = 'text/html; charset=utf8';
    res.end(html);
  });
};
