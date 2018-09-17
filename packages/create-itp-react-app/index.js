#!/usr/bin/env node
const shell = require('shelljs')
const chalk = require('chalk')
const path = require('path')
const createReactApp = require('./lib/createReactApp')
const createDocumentationApp = require('./lib/createDocumentationApp')
const injectProjectName = require('./lib/injectProjectName')
const cleanupReactApp = require('./lib/cleanupReactApp')
const copyTemplates = require('./lib/copyTemplates')
const installNPMPackages = require('./lib/installNPMPackages')
const initGit = require('./lib/initGit')
const appendToFile = require('./lib/appendToFile')
const updateJSON = require('./lib/updateJSON')

const appName = process.argv[2]

if (typeof appName === 'undefined') {
  console.error(chalk.red.bold('Define an appname as seconds argument.'))
  console.error(chalk.red.bold('Like: create-itp-react-app <APPNAME>.'))
  console.error(chalk.red.bold('Terminating this process..'))

  process.exit()
}

const appDir = `${process.cwd()}/${appName}`
const templateDir = path.resolve(__dirname, 'templates')

const logTitle = title => {
  console.log(' ')
  console.log(chalk.inverse(title))
}

const run = async () => {
  shell.exec('clear')
  console.log(chalk.white.bgBlue.bold(`Create ITP React App: ${appName}`))
  console.log('Learn more about create-itp-react-app at https://github.com/')

  // remove application dir
  shell.rm('-rf', appDir)

  // create React App
  logTitle('Create React App')
  await createReactApp({appName})

  shell.cd(appDir)

  // cleanup React App
  logTitle('Cleanup React App')
  await cleanupReactApp({appDir})

  // copy templates
  logTitle('Copying templates')
  await copyTemplates({appDir, templateDir})

  logTitle('Inject project name')
  await injectProjectName({appDir, appName})

  // update local packages package.json
  await updateJSON({
    file: path.join(appDir, 'src', 'common', 'package.json'),
    updateJSON: packageJSON => ({
      ...packageJSON,
      name: `${appName}-common`,
    }),
  })

  await updateJSON({
    file: path.join(appDir, 'src', 'core', 'package.json'),
    updateJSON: packageJSON => ({
      ...packageJSON,
      name: `${appName}-core`,
    }),
  })

  // install design-docs
  logTitle('Installing design-docs')
  const designDocsName = 'design-docs'
  await createDocumentationApp({name: designDocsName})
  await updateJSON({
    file: path.join(appDir, designDocsName, 'package.json'),
    updateJSON: packageJSON => ({
      ...packageJSON,
      name: `${appName}-${designDocsName}`,
    }),
  })

  await appendToFile({
    directory: appDir,
    fileName: '.gitignore',
    data: `docs/node_modules\n.eslintcache`,
  })

  // install npm packages
  logTitle('Installing npm dependencies')
  await installNPMPackages({
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
    ],
  })

  // install npm dev dependencies
  logTitle('Installing npm dev dependencies')
  await installNPMPackages({
    appDir,
    dir: appDir,
    npmPackages: [
      'change-case',
      'css',
      'shelljs',
      'to-css',
      '@inthepocket/itp-react-scripts',
    ],
    options: {
      devDependencies: true,
    },
  })

  // update package.json
  logTitle('Updating package.json')
  await updateJSON({
    file: path.join(appDir, 'package.json'),
    updateJSON: packageJSON => {
      const {eject, ...scriptsToKeep} = packageJSON.scripts
      return {
        ...packageJSON,
        author: 'In The Pocket',
        license: 'MIT',
        scripts: {
          ...scriptsToKeep,
          'docs:start': `cd ${designDocsName} && npm run catalog-start`,
          'docs:build': `cd ${designDocsName} && npm run catalog-build`,
        },
      }
    },
  })

  // update .sketchxport config
  logTitle('Updating .sketchxport config')
  await updateJSON({
    file: path.join(appDir, '.sketchxport', 'config.json'),
    updateJSON: configJSON => ({
      ...configJSON,
      repo: {
        ...configJSON.repo,
        uri: configJSON.repo.uri.replace('<repo-slug-here>', appName),
      },
    }),
  })

  // init git
  logTitle('Initializing git')
  await initGit()

  console.log(' ')
  console.log('All set. Happy coding 🚀')
  console.log(' ')
}

run()
