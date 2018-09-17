#!/usr/bin/env node
const shell = require('shelljs');
const chalk = require('chalk');
const path = require('path');
const createReactApp = require('./lib/createReactApp');
const cleanupReactApp = require('./lib/cleanupReactApp');
const updateJSON = require('./lib/updateJSON');
const copyTemplates = require('./lib/copyTemplates');
const installNPMPackages = require('./lib/installNPMPackages');
const initGit = require('./lib/initGit');

const appName = process.argv[2];

if (typeof appName === 'undefined') {
  console.error(chalk.red.bold('Define an appname as seconds argument.'));
  console.error(chalk.red.bold('Like: create-itp-react-app <APPNAME>.'));
  console.error(chalk.red.bold('Terminating this process..'));

  process.exit();
}

const appDir = `${process.cwd()}/${appName}`;
const templateDir = path.resolve(__dirname, 'templates');

const logTitle = (title) => {
  console.log(' ');
  console.log(chalk.inverse(title));
};

const run = async() => {
  shell.exec('clear');
  console.log(chalk.white.bgBlue.bold(`Create ITP React App: ${appName}`));
  console.log('Learn more about create-itp-react-app at https://github.com/');

  // remove application dir
  shell.rm('-rf', appDir);

  // create React App
  logTitle('Create React App');
  await createReactApp({ appName });

  shell.cd(appDir);

  // cleanup React App
  logTitle('Cleanup React App');
  await cleanupReactApp({ appDir });

  // copy templates
  logTitle('Copying templates');
  await copyTemplates({ appDir, templateDir });

  // update local packages package.json
  await updateJSON({
    file: path.join(appDir, 'src', 'common', 'package.json'),
    updateJSON: packageJSON => ({
      ...packageJSON,
      name: `${appName}-common`,
    }),
  });

  await updateJSON({
    file: path.join(appDir, 'src', 'core', 'package.json'),
    updateJSON: packageJSON => ({
      ...packageJSON,
      name: `${appName}-core`,
    }),
  });

  // install docz
  logTitle('Installing docs');
  await updateJSON({
    file: path.join(appDir, 'docs', 'package.json'),
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
  logTitle('Installing npm dependencies');
  await installNPMPackages({
    appDir,
    dir: appDir,
    npmPackages: [
      // 'itp-react-scripts',
      'normalize.css',
      'prop-types',
      'react-redux',
      'redux-saga',
      'redux',
      'src/common',
      'src/core',
    ],
  });

  logTitle('Installing npm dev dependencies');
  await installNPMPackages({
    appDir,
    dir: appDir,
    npmPackages: [
      'change-case',
      'css',
      'shelljs',
      'to-css',
    ],
    options: {
      devDependencies: true
    }
  });

  // update package.json
  logTitle('Updating package.json');
  await updateJSON({
    file: path.join(appDir, 'package.json'),
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

  // update .sketchxport config
  logTitle('Updating .sketchxport config');
  await updateJSON({
    file: path.join(appDir, '.sketchxport', 'config.json'),
    updateJSON: configJSON => ({
      ...configJSON,
      repo: {
        ...configJSON.repo,
        uri: configJSON.repo.uri.replace('<repo-slug-here>', appName),
      },
    }),
  });

  // init git
  logTitle('Initializing git');
  await initGit();

  console.log(' ');
  console.log('All set. Happy coding 🚀');
  console.log(' ');
};

run();
