#!/usr/bin/env node
const chalk = require('chalk');
const path = require('path');
const runGenerator = require('./generator/runGenerator');
const setupGenerator = require('./generator/setupGenerator');

const init = async () => {
  try {
    const { appName, sketchFilePath } = await setupGenerator();

    runGenerator({
      appName,
      appDir: `${process.cwd()}/${appName}`,
      appTemplateDir: path.resolve(__dirname, 'templates', 'app'),
      sketchFilePath,
    });
  } catch (error) {
    if (error.message === 'appNameNotValid') {
      console.error(chalk.red.bold('You did not provide a valid appName.'));
      console.error(chalk.red('You can provide appName as second argument to the command.'));
      console.error(chalk.red('$ apx @inthepocket/create-itp-react-app <appName>'));
      console.error(chalk.red.bold('Terminating this process..'));
    }

    process.exit();
  }
};

init();
