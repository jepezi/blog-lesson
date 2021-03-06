import { readFileSync } from 'fs';
import path from 'path';
const markup = readFileSync(path.resolve(__dirname, '..', '..', 'public', 'admin.html'), 'utf-8');

function SimpleRenderer(options) {
  this.html = markup
    .replace('__CSS__', options.cssUrl)
    .replace('__VENDOR__', options.vendorUrl)
    .replace('__SCRIPT__', options.scriptUrl)
}

SimpleRenderer.prototype.render = function renderSimple(_req, callback) {
  callback(null, null, this.html);
};

module.exports = SimpleRenderer;
