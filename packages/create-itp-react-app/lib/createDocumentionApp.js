const shell = require('shelljs')
const {CATALOG_VERSION} = require('../config.json')

/**
 * Create React App
 * @param  {String} appName
 * @return {Promise}
 */
module.exports = ({name}) =>
  new Promise(resolve => {
    shell.exec(`npx create-catalog@${CATALOG_VERSION} ${name}`, resolve)
  })
