const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const baseConfig = require('./base.config')

const baseProdConfig = webpackMerge(baseConfig, {
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.IgnorePlugin(/[^/]+\/[\S]+.dev$/),
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      compressor: {
        warnings: false,
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ]
})

module.exports = baseProdConfig