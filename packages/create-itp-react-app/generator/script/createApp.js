const chalk = require('chalk');
const path = require('path');
const shell = require('shelljs');

const logTitle = require('../../lib/logTitle');
const createReactApp = require('../../lib/createReactApp');
const injectProjectName = require('../../lib/injectProjectName');
const cleanupReactApp = require('../../lib/cleanupReactApp');
const copyDirectory = require('../../lib/copyDirectory');
const updateJSON = require('../../lib/updateJSON');
const installNPMPackages = require('../../lib/installNPMPackages');
const appendToFile = require('../../lib/appendToFile');

module.exports = async ({appName, appDir, appTemplateDir}) => {
  shell.exec('clear');
  console.log(chalk.white.bgBlue.bold(`Create ITP React App: ${appName}`));
  console.log('Learn more about create-itp-react-app at https://github.com/inthepocket/itp-react-components/tree/develop/packages/create-itp-react-app');

  // remove application dir
  shell.rm('-rf', appDir);

  // create React App
  logTitle('Create React App');
  await createReactApp({appName});

  shell.cd(appDir);

  logTitle('Npm install, instead of yarn');
  await new Promise(resolve => shell.exec('npm i', resolve));

  // cleanup React App
  logTitle('Cleanup React App');
  await cleanupReactApp({appDir});

  // copy templates
  logTitle('Copying app templates');
  await copyDirectory({
    targetDir: appDir,
    srcDir: appTemplateDir,
    options: {
      dot: true, // to copy .hubble-mirror.json
    },
  });

  logTitle('Inject project name');
  await injectProjectName({appDir, appName});

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

  // install npm packages
  logTitle('Installing npm dependencies');
  await installNPMPackages({
    appDir,
    dir: appDir,
    npmPackages: [
      'normalize.css',
      'prop-types',
      'react-redux',
      'react-app-rewire-postcss',
      'react-app-rewire-css-modules-extensionless',
      'postcss-preset-env',
      'redux-saga',
      'redux',
      'src/common',
      'src/core',
      'to-css',
      '@inthepocket/itp-rcc-button',
    ],
  });

  // install npm dev dependencies
  logTitle('Installing npm dev dependencies');
  await installNPMPackages({
    appDir,
    dir: appDir,
    npmPackages: [
      'change-case',
      'shelljs',
      '@inthepocket/itp-react-scripts',
      '@inthepocket/hubble-mirror',
      'react-app-rewired',
    ],
    options: {
      devDependencies: true,
    },
  });

  // update gitignore
  await appendToFile({
    directory: appDir,
    fileName: '.gitignore',
    data: `\n.eslintcache\n.vscode`,
  });

  // update package.json
  logTitle('Updating package.json');
  await updateJSON({
    file: path.join(appDir, 'package.json'),
    updateJSON: packageJSON => {
      const {eject, ...scriptsToKeep} = packageJSON.scripts;
      return {
        ...packageJSON,
        author: 'In The Pocket',
        license: 'MIT',
        scripts: {
          ...scriptsToKeep,
          start: 'react-app-rewired start',
          build: 'react-app-rewired build',
          test: 'react-app-rewired test --env=jsdom',
          'create-root-css': 'node ./scripts/createRootCSS.js',
          lint: 'itp-react-scripts lint',
          'lint:fix': 'npm run lint – --fix',
        },
      };
    },
  });
};
