const shell = require('shelljs');
const logTitle = require('../../lib/logTitle');

module.exports = async ({ appName, appDir }) => {
  // create root.css files
  logTitle('Creating root.css');
  shell.exec('npm run create-root-css');
};