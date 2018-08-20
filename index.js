#!/usr/bin/env node
const shell = require('shelljs');
const chalk = require('chalk');
const Ora = require('ora');
const fs = require('fs');
const path = require('path');
const createPackageJSON = require('./lib/createPackageJSON');
const copyTemplates = require('./lib/copyTemplates');
const installNPMPackages = require('./lib/installNPMPackages');

const appName = process.argv[2];
const appDir = `${process.cwd()}/${appName}`;
const templateDir = path.resolve(__dirname, 'templates');
const overridesDir = path.resolve(__dirname, 'overrides');
let spinner = new Ora({
  spinner: 'monkey',
});

const run = async() => {
  shell.exec('clear');
  console.log(chalk.white.bgBlue.bold(`Create ITP React App: ${appName}`));
  console.log('Learn more about create-itp-react-app at https://github.com/');
  console.log(' ');

  // create application dir
  shell.rm('-rf', appDir);
  shell.mkdir(appDir);
  shell.cd(appDir);

  // copy templates
  spinner.text = 'copying templates';
  spinner.start();
  copyTemplates({ appDir, templateDir });
  spinner.stopAndPersist({ symbol: '✓' });

  // create package.json
  spinner.text = 'creating package.json';
  spinner.start();
  await createPackageJSON({ appName, overridesDir });
  spinner.stopAndPersist({ symbol: '✓' });

  // install npm packages
  spinner.text = 'installing npm packages';
  spinner.start();
  await installNPMPackages({
    npmPackages: [
      'react',
      'react-dom',
      //'itp-react-scripts',
      'redux',
      'react-redux',
      'redux-saga',
      'docz',
    ],
  });
  spinner.stopAndPersist({ symbol: '✓' });

  // install design system
  spinner.text = 'installing design system';
  spinner.start();
  spinner.stopAndPersist({ symbol: '✓' });

  console.log(' ');
  console.log('All set. Happy coding 🚀');
  console.log(' ');
};

run();
