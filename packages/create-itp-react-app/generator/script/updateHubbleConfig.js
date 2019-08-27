const path = require('path');

const logTitle = require('../../lib/logTitle');
const updateJSON = require('../../lib/updateJSON');

module.exports = async ({ appDir, appName }) => {
  logTitle('Updating .hubble-mirror config');

  await updateJSON({
    file: path.join(appDir, 'hubble', '.hubble-mirror.json'),
    updateJSON: configJSON => ({
      ...configJSON,
      deployPreview: {
        ...configJSON.deployPreview,
        previewUrl: configJSON.deployPreview.previewUrl.replace('<APP_NAME>', appName)
      }
    }),
  });
};
