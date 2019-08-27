const initGit = require('./script/initGit');
const createApp = require('./script/createApp');
const createDocs = require('./script/createDocs');
const updateHubbleConfig = require('./script/updateHubbleConfig');

module.exports = async ({ appName, appDir, appTemplateDir, docsTemplateDir }) => {
  await createApp({ appName, appDir, appTemplateDir });
  await createDocs({ appName, appDir, docsTemplateDir });
  await updateHubbleConfig({ appDir, appName });
  await initGit();

  console.log(' ');
  console.log('All set. Happy coding 🚀');
  console.log(' ');
};
