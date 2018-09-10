/* eslint-disable global-require, import/no-extraneous-dependencies */
module.exports = {
  plugins: [
    require('postcss-custom-properties')({
      appendVariables: true,
      variables: require('./src/themes/variables.json'),
    }),
    require('postcss-import')({
      plugins: [require('stylelint')],
    }),
    require('precss'),
    require('autoprefixer'),
  ],
}
