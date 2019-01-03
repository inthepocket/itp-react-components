const chalk = require ('chalk');
const path = require ('path');
const shell = require ('shelljs');

const logTitle = require ('../../lib/logTitle');
const createReactApp = require ('../../lib/createReactApp');
const injectProjectName = require ('../../lib/injectProjectName');
const cleanupReactApp = require ('../../lib/cleanupReactApp');
const copyDirectory = require ('../../lib/copyDirectory');
const updateJSON = require ('../../lib/updateJSON');
const installNPMPackages = require ('../../lib/installNPMPackages');
const appendToFile = require ('../../lib/appendToFile');

module.exports = async ({appName, appDir, appTemplateDir}) => {
  try {
    shell.exec ('clear');
    console.log (chalk.white.bgBlue.bold (`Create ITP React App: ${appName}`));
    console.log (
      'Learn more about create-itp-react-app at https://github.com/'
    );

    // remove application dir
    shell.rm ('-rf', appDir);

    // create React App
    logTitle ('Create React App');
    await createReactApp ({appName});

    shell.cd (appDir);

    // cleanup React App
    logTitle ('Cleanup React App');
    await cleanupReactApp ({appDir});

    // copy templates
    logTitle ('Copying app templates');
    await copyDirectory ({targetDir: appDir, srcDir: appTemplateDir});

    logTitle ('Inject project name');
    await injectProjectName ({appDir, appName});

    // update local packages package.json
    await updateJSON ({
      file: path.join (appDir, 'src', 'common', 'package.json'),
      updateJSON: packageJSON => ({
        ...packageJSON,
        name: `${appName}-common`,
      }),
    });

    await updateJSON ({
      file: path.join (appDir, 'src', 'core', 'package.json'),
      updateJSON: packageJSON => ({
        ...packageJSON,
        name: `${appName}-core`,
      }),
    });

    // install npm packages
    logTitle ('Installing npm dependencies');
    await installNPMPackages ({
      appDir,
      dir: appDir,
      npmPackages: [
        'normalize.css',
        'prop-types',
        'react-redux',
        'redux-saga',
        'redux',
        'src/common',
        'src/core',
        '@inthepocket/itp-rcc-button',
      ],
    });

    // install npm dev dependencies
    logTitle ('Installing npm dev dependencies');
    await installNPMPackages ({
      appDir,
      dir: appDir,
      npmPackages: [
        'change-case',
        'shelljs',
        'to-css',
        '@inthepocket/itp-react-scripts',
        'react-app-rewired',
        'react-app-rewire-postcss',
        'react-app-rewire-css-modules-extensionless',
        'postcss-preset-env',
      ],
      options: {
        devDependencies: true,
      },
    });

    // update gitignore
    await appendToFile ({
      directory: appDir,
      fileName: '.gitignore',
      data: `\n.eslintcache\n.vscode`,
    });

    // update package.json
    logTitle ('Updating app package.json');
    await updateJSON ({
      file: path.join (appDir, 'package.json'),
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
          },
        };
      },
    });
  } catch (e) {
    console.error (chalk.red.bold ('Create App failed'));
    throw e;
  }
};
