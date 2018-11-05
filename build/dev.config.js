const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const baseConfig = require('./base.config')

const baseDevConfig = webpackMerge(baseConfig, {
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ]
})

module.exports = baseDevConfig