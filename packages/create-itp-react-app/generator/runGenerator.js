const initGit = require('./script/initGit');
const createApp = require('./script/createApp');
const createDocs = require('./script/createDocs');
const createRootCSS = require('./script/createRootCSS');
const updateHubbleConfig = require('./script/updateHubbleConfig');

module.exports = async ({ appName, appDir, appTemplateDir, docsTemplateDir, sketchfilePath }) => {
  await createApp({ appName, appDir, appTemplateDir });
  await createDocs({ appName, appDir, docsTemplateDir });
  await createRootCSS({ appName, appDir });
  await updateHubbleConfig({ appName, appDir, sketchfilePath });
  await initGit();

  console.log(' ');
  console.log('All set. Happy coding 🚀');
  console.log(' ');
};
