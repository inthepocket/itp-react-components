const shell = require('shelljs');
const { CREATE_REACT_APP_VERSION } = require('../config.json');

/**
 * Create React App
 * @param  {String} appName
 * @return {Promise}
 */
module.exports = async ({ appName }) =>
  new Promise((resolve, reject) => {
    shell.exec(`npx create-react-app@${CREATE_REACT_APP_VERSION} ${appName}`, (code, stdout, stderr) => {
      if (code !== 0) {
        reject(new Error(stderr));
      }
      resolve(stdout);
    });
  });
