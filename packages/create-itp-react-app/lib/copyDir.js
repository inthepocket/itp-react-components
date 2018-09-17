const shell = require('shelljs');

/**
 * Install npm packages
 * @return {Promise}
 */
module.exports = ({ targetDir, srcDir }) =>
  new Promise(resolve => {
    shell.exec(`cp -a -R ${srcDir}/. ${targetDir}`, resolve);
  });
