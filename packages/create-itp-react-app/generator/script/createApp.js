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
      dot: true,
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

  await updateJSON({
    file: path.join(appDir, 'src', '__mockdata__', 'package.json'),
    updateJSON: packageJSON => ({
      ...packageJSON,
      name: `${appName}-mock`,
    }),
  });

  // install npm packages
  logTitle('Installing npm dependencies');
  await installNPMPackages({
    appDir,
    dir: appDir,
    npmPackages: [
      '@inthepocket/itp-css',
      'normalizr',
      'react-redux',
      'redux-react-hook',
      'redux-saga',
      'redux',
      'src/__mockdata__',
      'src/common',
      'src/core',
      'to-css',
      'typesafe-actions',
    ],
  });

  // install npm dev dependencies
  logTitle('Installing npm dev dependencies');
  await installNPMPackages({
    appDir,
    dir: appDir,
    npmPackages: [
      '@inthepocket/itp-react-scripts',
      '@types/react-test-renderer',
      'change-case',
      'postcss-custom-media',
      'postcss-import',
      'react-app-rewire-postcss',
      'react-app-rewired',
      'react-test-renderer',
      'redux-saga-test-plan@v4.0.0-beta.2',
      'shelljs',
      'stylelint-config-itp',
      'stylelint',
      'tslint-config-airbnb',
      'tslint-react',
      'tslint',
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
          test: 'react-scripts test --env=jsdom',
          'test:coverage': 'react-scripts test --env=jsdom --coverage',
          lint: 'npm run lint:ts && npm run lint:css',
          'lint:ts': `tslint -c tslint.json --project tsconfig.json 'src/**/*.ts' 'src/**/*.tsx'`,
          'lint:css': `stylelint 'src/**/*.css'`,
        },
        jest: {
          coverageThreshold: {
            global: {
              statements: 100,
              branches: 100,
              functions: 100,
              lines: 100,
            },
          },
          collectCoverageFrom: [
            'src/**/*.{ts,tsx,js,jsx}',
            '!**/node_modules/**',
            '!src/__mockdata__/**',
            '!src/index.tsx',
            '!src/serviceWorker.ts',
          ],
        },
      };
    },
  });
};
