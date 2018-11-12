const path = require('path')
const root = path.resolve(__dirname, './')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const nodeExternals = require('webpack-node-externals')

const config = {
  devtool: 'source-map',
  target: 'node',
  node: {
    __dirname: false,
  },
  externals: [nodeExternals()],
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
      exclude: path.resolve(__dirname, '../node_modules/'),
      include: root,
    }],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new CopyWebpackPlugin([{
      from: path.join(__dirname, '../assets/'),
      to: path.join(__dirname, '../build/assets/'),
      toType: 'dir'
    }, {
      from: path.join(__dirname, '../config.json'),
      to: '../build/[name].[ext]',
      toType: 'template',
    }])
  ]
}

module.exports = config