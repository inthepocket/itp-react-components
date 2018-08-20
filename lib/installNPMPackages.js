const shell = require('shelljs');

/**
 * Install npm packages
 * @return {Promise}
 */
module.exports = ({ npmPackages }) => {
  return new Promise((resolve) => {
    shell.exec(`npm install --save ${npmPackages.join(' ')} --silent > "/dev/null" 2>&1`, resolve);
  });
};
