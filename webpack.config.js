const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');


module.exports = {
  entry: './src/main.mjs',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'es5.bundle.js'
  },
  module: {
    rules: [      
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.vue$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'vue-loader'      
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
};