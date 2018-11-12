const path = require('path')
const root = path.resolve(__dirname, './')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  devtool: 'eval-cheap-module-source-map',
  target: 'node',
  externals: [nodeExternals()],
  node: {
    __dirname: false,
  },
  entry: {
    index: path.join(__dirname, '../src/command')
  },
  output: {
    path: path.join(__dirname, '../build/'),
    filename: 'index.js',
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
      include: root,
    }, {
      test: /\.js$/,
      loader: 'shebang-loader'
    }],
  }
}