const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const baseConfig = require('./base.config')

const baseProdConfig = webpackMerge(baseConfig, {
  optimization: {
    minimize: false
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.IgnorePlugin(/[^/]+\/[\S]+.dev$/),
  ]
})

module.exports = baseProdConfig