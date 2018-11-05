const path = require('path')

module.exports = {
  devtool: 'eval-cheap-module-source-map',
  entry: {

  },
  output: {

  },
  resolve: {
    extensions: ['*', '.js'],
    alias: {
      APP: path.resolve(__dirname, '../src')
    }
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: '/node_modules/',
    }]
  }
}