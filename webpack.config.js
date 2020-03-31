const path = require('path');

module.exports = {
  entry: './src/main.mjs',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'es6.bundle.js'
  }  
};