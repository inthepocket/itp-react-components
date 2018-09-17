/* eslint-disable import/no-extraneous-dependencies */

const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require('./webpack.common.js');

module.exports = merge(
  common({
    cssStyleLoader: {
      loader: MiniCssExtractPlugin.loader,
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].[hash].css',
        chunkFilename: '[id].[hash].css',
      }),
    ],
  }),
  {
    mode: 'production',
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            {
              loader: 'style-loader',
            },
          ],
        },
      ],
    },
  },
);
