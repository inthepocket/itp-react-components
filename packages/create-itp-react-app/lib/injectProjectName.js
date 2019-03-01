const replaceInFile = require('replace-in-file');

/**
 * Install npm packages
 * @return {Promise}
 */
module.exports = ({ appDir, appName }) =>
  replaceInFile({
    files: `${appDir}/**/*.ts*`,
    from: /<PROJECT-NAME>/g,
    to: appName,
  });
