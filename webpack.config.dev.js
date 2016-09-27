const path = require('path')
const webpack = require('webpack')
const WebpackHTML = require('html-webpack-plugin')

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loader: 'style!css?modules&sourceMap'
    }, {
      test: /\.(svg|eot|woff|woff2|ttf)$/,
      loader: 'file'
    }]
  },
  plugins: [
    new WebpackHTML({
      title: 'Raio Webpackrizante'
    })
  ]
}
