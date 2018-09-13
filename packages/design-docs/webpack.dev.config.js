/* eslint-disable import/no-extraneous-dependencies */
const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(
  common({
    cssStyleLoader: {
      loader: 'style-loader',
    },
  }),
  {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
      port: 3001,
      contentBase: path.resolve(__dirname, 'dist'),
    },
  },
)
