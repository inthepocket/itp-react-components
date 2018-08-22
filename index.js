#!/usr/bin/env node
const shell = require('shelljs');
const chalk = require('chalk');
const Ora = require('ora');
const fs = require('fs');
const path = require('path');
const createReactApp = require('./lib/createReactApp');
const cleanupReactApp = require('./lib/cleanupReactApp');
const updatePackageJSON = require('./lib/updatePackageJSON');
const copyTemplates = require('./lib/copyTemplates');
const installNPMPackages = require('./lib/installNPMPackages');
const initGit = require('./lib/initGit');

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

  // remove application dir
  shell.rm('-rf', appDir);

  // create React App
  console.log(chalk.inverse('Create React App'));
  await createReactApp({ appName });
  //spinner.stopAndPersist({ symbol: '✓' });

  shell.cd(appDir);

  // cleanup React App
  spinner.text = chalk.inverse('cleanup React App');
  spinner.start();
  await cleanupReactApp({ appDir });
  spinner.stopAndPersist({ symbol: '✓' });

  // copy templates
  spinner.text = 'copying templates';
  spinner.start();
  await copyTemplates({ appDir, templateDir });
  spinner.stopAndPersist({ symbol: '✓' });

  // update local packages package.json
  await updatePackageJSON({
    appDir: `${appDir}/src/common`,
    updateJSON: packageJSON => ({
      ...packageJSON,
      name: `${appName}-common`,
    }),
  });

  await updatePackageJSON({
    appDir: `${appDir}/src/core`,
    updateJSON: packageJSON => ({
      ...packageJSON,
      name: `${appName}-core`,
    }),
  });

  // install docz
  console.log(chalk.inverse('Installing docs'));
  await updatePackageJSON({
    appDir: `${appDir}/docs`,
    updateJSON: packageJSON => ({
      ...packageJSON,
      name: `${appName}-docs`,
    }),
  });

  // install docz packages
  await installNPMPackages({
    appDir,
    dir: path.join(appDir, 'docs'),
    npmPackages: [
      'docz',
      'react',
      '../src/common',
    ],
  });

  // install npm packages
  console.log(chalk.inverse('Installing npm packages'));
  await installNPMPackages({
    appDir,
    dir: appDir,
    npmPackages: [
      //'itp-react-scripts',
      'prop-types',
      'redux',
      'react-redux',
      'redux-saga',
      'src/common',
      'src/core',
    ],
  });

  // update package.json
  spinner.text = 'updating package.json';
  spinner.start();
  await updatePackageJSON({
    appDir,
    updateJSON: packageJSON => ({
      ...packageJSON,
      author: 'In The Pocket',
      license: 'MIT',
      scripts: {
        ...packageJSON.scripts,
        'docz:start': 'cd docs && npm run start',
        'docz:build': 'cd docs && npm run build',
      },
    }),
  });
  spinner.stopAndPersist({ symbol: '✓' });

  // init git
  console.log(chalk.inverse('Initializing git'));
  await initGit();

  console.log(' ');
  console.log('All set. Happy coding 🚀');
  console.log(' ');
};

run();
