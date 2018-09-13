#!/usr/bin/env node
const shell = require('shelljs')
const chalk = require('chalk')
const path = require('path')
const createReactApp = require('./lib/createReactApp')
const createDocumentionApp = require('./lib/createDocumentionApp')
const injectProjectName = require('./lib/injectProjectName')
const cleanupReactApp = require('./lib/cleanupReactApp')
const updatePackageJSON = require('./lib/updatePackageJSON')
const copyTemplates = require('./lib/copyTemplates')
const installNPMPackages = require('./lib/installNPMPackages')
const initGit = require('./lib/initGit')
const appendToFile = require('./lib/appendToFile')

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
  await updatePackageJSON({
    appDir: `${appDir}/src/common`,
    updateJSON: packageJSON => ({
      ...packageJSON,
      name: `${appName}-common`,
    }),
  })

  await updatePackageJSON({
    appDir: `${appDir}/src/core`,
    updateJSON: packageJSON => ({
      ...packageJSON,
      name: `${appName}-core`,
    }),
  })

  // install design-docs
  logTitle('Installing design-docs')
  const designDocsName = 'design-docs'
  await createDocumentionApp({name: designDocsName})
  await updatePackageJSON({
    appDir: `${appDir}/${designDocsName}`,
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

  // install docz packages
  // TODO JDI
  // await installNPMPackages({
  //   appDir,
  //   dir: path.join(appDir, ''),
  //   npmPackages: [
  //     'docz',
  //     'react',
  //     '../src/common',
  //     '@inthepocket/itp-rcc-collapse'
  //   ],
  // });

  // install npm packages
  logTitle('Installing npm packages')
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

  // install npm packages
  logTitle('Installing npm packages')
  await installNPMPackages({
    appDir,
    dir: appDir,
    isDevDependency: true,
    npmPackages: ['@inthepocket/itp-react-scripts'],
  })

  // update package.json
  logTitle('Updating package.json')
  await updatePackageJSON({
    appDir,
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

  // init git
  logTitle('Initializing git')
  await initGit()

  console.log(' ')
  console.log('All set. Happy coding 🚀')
  console.log(' ')
}

run()
