const shell = require('shelljs');

/**
 * Install npm packages
 * @return {Promise}
 */
module.exports = ({ appDir, templateDir }) => {
  return new Promise((resolve) => {
    shell.exec(`cp -a -R ${templateDir}/. ${appDir}`, resolve);
  });
};
