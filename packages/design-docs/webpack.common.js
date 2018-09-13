/* eslint-disable import/no-extraneous-dependencies */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = ({plugins = [], cssStyleLoader}) => ({
  entry: {app: path.join(__dirname, 'src/index.js')},
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          cssStyleLoader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.md$/,
        use: ['catalog/loader', 'raw-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/index.html'),
      filename: './index.html',
    }),
    new CopyWebpackPlugin([
      {
        from: path.join(__dirname, 'public'),
        to: path.resolve(__dirname, 'dist'),
      },
    ]),
    ...plugins,
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
})
