const shell = require('shelljs');
const path = require('path');

/**
 * Create React App
 * @param  {String} appDir
 * @return {Promise}
 */
module.exports = ({ appDir }) =>
  new Promise(resolve => {
    shell.rm([
      path.join(appDir, 'README.md'),
      path.join(appDir, 'src', 'App.css'),
      path.join(appDir, 'src', 'App.js'),
      path.join(appDir, 'src', 'App.test.js'),
      path.join(appDir, 'src', 'logo.svg'),
      path.join(appDir, 'src', 'index.css'),
      path.join(appDir, 'src', 'index.js'),
      path.join(appDir, 'public', 'favicon.ico'),
    ]);

    resolve();
  });
