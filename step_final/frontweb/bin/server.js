// Added for ES6 usage demonstration in devServerAdmin
//
// Polyfill for async await
require('babel-polyfill');
// Babel require hook
require('babel-register')({
  presets: ['es2015', 'react', 'stage-2'],
  plugins: [
    'transform-runtime',
    'transform-react-constant-elements', // optimize: constant first
    'transform-react-inline-elements' // optimize
  ],
  compact: false,
});

global.__CLIENT__ = false;
global.__SERVER__ = true;
global.__DEVELOPMENT__ = process.env.NODE_ENV !== 'production';

require('../server/server.js');
