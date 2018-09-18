const shell = require('shelljs');

const logTitle = require('../../lib/logTitle');

const cmds = [
  'git init',
  'git add .',
  'git commit -m "initial commit"',
  'git branch develop',
  'git checkout develop',
];

/**
 * Init git
 * @return {Promise}
 */
module.exports = () =>
  new Promise(resolve => {
    logTitle('Initializing git');

    shell.exec(cmds.join(' && '), resolve);
  });
