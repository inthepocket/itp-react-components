const shell = require('shelljs');
var copy = require('recursive-copy');

/**
 * Install npm packages
 * @return {Promise}
 */
module.exports = ({ targetDir, srcDir, options }) => copy(srcDir, targetDir, options);
