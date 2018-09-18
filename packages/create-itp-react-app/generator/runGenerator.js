const initGit = require('./script/initGit');
const createApp = require('./script/createApp');
const createDocs = require('./script/createDocs');
const updateSketchPortConfig = require('./script/updateSketchPortConfig');

module.exports = async ({ appName, appDir, appTemplateDir, docsTemplateDir, sketchFilePath }) => {
  await createApp({ appName, appDir, appTemplateDir });
  await createDocs({ appName, appDir, docsTemplateDir });
  await updateSketchPortConfig({ appName, appDir, sketchFilePath });
  await initGit();

  console.log(' ');
  console.log('All set. Happy coding 🚀');
  console.log(' ');
};
