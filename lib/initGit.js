const shell = require('shelljs');

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
module.exports = () => {
  return new Promise((resolve) => {
    shell.exec(cmds.join(' && '), resolve);
  });
};
