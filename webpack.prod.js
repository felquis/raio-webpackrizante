const path = require('path')
const webpack = require('webpack')
const CopyPlugin = require('copy-webpack-plugin')
const ExtractText = require('extract-text-webpack-plugin')
const extractCSS = new ExtractText('style.css')

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loader: extractCSS.extract(['css'])
    }, {
      test: /\.(svg|eot|woff|woff2|ttf)$/,
      loader: 'file'
    }]
  },
  plugins: [
    new CopyPlugin([{
      from: 'app/index.html'
    }]),
    extractCSS
  ]
}
