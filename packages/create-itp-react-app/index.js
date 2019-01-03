#!/usr/bin/env node
const chalk = require('chalk');
const path = require('path');
const fs = require('fs');
const runGenerator = require('./generator/runGenerator');
const setupGenerator = require('./generator/setupGenerator');

const verifyIfExists = async dir =>
  new Promise((resolve, reject) => {
    fs.exists(
      dir,
      exists =>
        exists
          ? resolve()
          : reject(new Error(`path ${dir} does not exists, unable to execute script`)),
    );
  });

const init = async () => {
  try {
    const { appName, sketchfilePath } = await setupGenerator();

    const docsTemplateDir = path.resolve(__dirname, 'templates', 'design-docs');
    const appTemplateDir = path.resolve(__dirname, 'templates', 'app');

    await verifyIfExists(appTemplateDir);

    try {
      await verifyIfExists(docsTemplateDir);
    } catch (err) {
      console.error(
        chalk.red.bold(
          `\nDon't forget to run the prepublishOnly script before using the generator locally. \nThis is needed to have a local template directory of the design docs.\n`,
        ),
      );
      throw err;
    }

    await runGenerator({
      appName,
      appDir: `${process.cwd()}/${appName}`,
      appTemplateDir,
      docsTemplateDir,
      sketchfilePath,
    });
  } catch (error) {
    if (error.message === 'appNameNotValid') {
      console.error(chalk.red.bold('You did not provide a valid appName.'));
      console.error(chalk.red('You can provide appName as second argument to the command.'));
      console.error(chalk.red('$ apx @inthepocket/create-itp-react-app <appName>'));
      console.error(chalk.red.bold('Terminating this process..'));
    } else {
      console.error(error);
    }

    process.exit();
  }
};

init();
