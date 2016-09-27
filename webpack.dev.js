const path = require('path')
const webpack = require('webpack')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loader: 'style!css'
    }, {
      test: /\.(svg|eot|woff|woff2|ttf)$/,
      loader: 'file'
    }]
  },
  plugins: [
    new CopyPlugin([{
      from: 'app/index.html'
    }])
  ]
}
