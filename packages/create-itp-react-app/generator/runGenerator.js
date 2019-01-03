const chalk = require ('chalk');
const initGit = require('./script/initGit');
const createApp = require('./script/createApp');
const createDocs = require('./script/createDocs');
const createRootCSS = require('./script/createRootCSS');
const updateSketchPortConfig = require('./script/updateSketchPortConfig');

module.exports = async ({ appName, appDir, appTemplateDir, docsTemplateDir, sketchfilePath }) => {
  try {
    await createApp({ appName, appDir, appTemplateDir });
    await createDocs({ appName, appDir, docsTemplateDir });
    await createRootCSS({ appName, appDir });
    await updateSketchPortConfig({ appName, appDir, sketchfilePath });
    await initGit();

    console.log(' ');
    console.log('All set. Happy coding 🚀');
    console.log(' ');
  } catch(e) {
    console.error (chalk.red.bold ('Generator failed'));
    throw e;
  }
};
