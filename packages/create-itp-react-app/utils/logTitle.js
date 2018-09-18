const chalk = require('chalk');

const logTitle = title => {
    console.log(' ');
    console.log(chalk.inverse(title));
  };
  
  module.exports = logTitle;