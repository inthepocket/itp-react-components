/* eslint-disable global-require, import/no-extraneous-dependencies, import/no-dynamic-require */
const path = require('path')

const pathToDefaultStyle = `${path.resolve(__dirname)}/root.json`
let defaultStyle

try {
  defaultStyle = require(pathToDefaultStyle)
} catch (e) {
  defaultStyle = {
    'color-primary': '#000',
    'color-secondary': '#fff',
    'color-tertiary': '#10069f',
  }
}

// REMOVE-THIS-LATER overwrite with defaults for now..
defaultStyle = {
  colorPrimary: '#9E9E9E',
  colorPrimary400: '#BDBDBD',
  colorPrimary600: '#757575',
  colorSecondary: '#2196F3',
  colorSecondary400: '#42A5F5',
  colorSecondary600: '#1E88E5',
  colorTertiary: '#00BCD4',
  colorTertiary400: '#26C6DA',
  colorTertiary600: '#00ACC1',
}
// REMOVE-THIS-LATER end of overwrite with defaults for now..

module.exports = {
  plugins: [
    require('postcss-custom-properties')({
      appendVariables: true,
      variables: defaultStyle,
    }),
    require('postcss-import')({
      plugins: [require('stylelint')],
    }),
    require('precss'),
    require('autoprefixer'),
  ],
}
