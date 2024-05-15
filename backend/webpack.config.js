const path = require('path')
const webpackNodeExternals = require('webpack-node-externals')

module.exports = {
  mode: 'production',
  entry: path.join(__dirname, 'main.js'),
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),
  },
  target: 'node',
  externals: [
    webpackNodeExternals()
  ]
}