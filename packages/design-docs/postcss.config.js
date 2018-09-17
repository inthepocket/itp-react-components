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
  colorPrimary: '#a0d6e0',
  colorPrimary400: '#b3dde6',
  colorPrimary600: '#8dcfdb',
  colorSecondary: '#81a97c',
  colorSecondary400: '#97b690',
  colorSecondary600: '#6b9d6a',
  colorTertiary: '#10069f',
  colorTertiary400: '#10069f',
  colorTertiary600: '#10069f',
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
