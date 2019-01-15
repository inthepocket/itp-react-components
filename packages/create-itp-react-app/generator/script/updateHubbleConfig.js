const path = require('path');

const logTitle = require('../../lib/logTitle');
const updateJSON = require('../../lib/updateJSON');

module.exports = async ({ appDir, bucketName }) => {
  logTitle('Updating package.json for hubble config');

  await updateJSON({
    file: path.join(appDir, 'package.json'),
    updateJSON: packageJSON => ({
      ...packageJSON,
      scripts: {
        ...packageJSON.scripts,
        "hubble:process": "hubble-mirror:process",
        "hubble:postProcess": "hubble-mirror:postProcess",
        "hubble:createPR": "hubble-mirror:createPR"
      }
    })
  })

  logTitle('Updating .hubble-mirror config');

  await updateJSON({
    file: path.join(appDir, '.hubble-mirror.json'),
    updateJSON: configJSON => ({
      ...configJSON,
      source: {
        ...configJSON.source,
        assets: configJSON.source.assets.replace('<BUCKET_NAME>', bucketName),
        hst: configJSON.source.hst.replace('<BUCKET_NAME>', bucketName),
      }
    }),
  });
};
