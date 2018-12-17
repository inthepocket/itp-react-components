const path = require('path');

const logTitle = require('../../lib/logTitle');
const updateJSON = require('../../lib/updateJSON');

module.exports = async ({ appName, appDir, sketchfilePath }) => {
  // update .hubble config
  logTitle('Updating .hubble config');
  await updateJSON({
    file: path.join(appDir, '.hubble', 'config.json'),
    updateJSON: configJSON => ({
      ...configJSON,
      commit: {
        ...configJSON.commit,
        sketchfilePath,
      },
      repo: {
        ...configJSON.repo,
        uri: configJSON.repo.uri.replace('<repo-slug-here>', appName),
      },
    }),
  });
};
