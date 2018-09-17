const path = require('path')
const pkg = require('./package.json')

const removeOrganisation = libraryName =>
  libraryName.substring(libraryName.indexOf('/') + 1, libraryName.length)

const libraryName = removeOrganisation(pkg.name)

module.exports = {
  output: {
    path: path.resolve(__dirname, './lib'),
    filename: 'index.js',
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  externals: {
    react: 'react',
  },
}
