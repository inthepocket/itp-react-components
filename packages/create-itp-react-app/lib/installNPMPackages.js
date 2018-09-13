const shell = require('shelljs')

/**
 * Install npm packages
 * @param  {String} appDir
 * @param  {String} dir
 * @param  {Array} npmPackages
 * @return {Promise}
 */
module.exports = ({appDir, dir, npmPackages, isDevDependency = false}) =>
  new Promise(resolve => {
    shell.cd(dir)
    shell.exec(
      `npm install ${isDevDependency ? '-D' : '-S'} ${npmPackages.join(' ')}`,
      () => {
        shell.cd(appDir)
        resolve()
      },
    )
  })
