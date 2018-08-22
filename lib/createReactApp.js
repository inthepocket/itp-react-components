const shell = require('shelljs');

/**
 * Create React App
 * @param  {String} appName
 * @return {Promise}
 */
module.exports = ({ appName }) => {
  return new Promise((resolve) => {
    shell.exec(`npx create-react-app ${appName}`, resolve);
  });
};
