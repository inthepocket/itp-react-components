const shell = require('shelljs');
const { CREATE_REACT_APP_VERSION } = require('../config.json');

/**
 * Create React App
 * @param  {String} appName
 * @return {Promise}
 */
module.exports = ({ appName }) =>
  new Promise(resolve => {
    shell.exec(`npx create-react-app@${CREATE_REACT_APP_VERSION} ${appName} --typescript`, resolve);
  });
