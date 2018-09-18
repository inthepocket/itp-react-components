const chalk = require('chalk');

module.exports = title => {
  console.log(' ');
  console.log(chalk.inverse(title));
};