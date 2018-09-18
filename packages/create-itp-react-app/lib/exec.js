const shell = require('shelljs');

module.exports = (script) =>
new Promise(resolve => {
    shell.exec(script, () => {
      resolve();
    });
  });