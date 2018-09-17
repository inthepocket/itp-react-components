const fs = require('fs');
const path = require('path');

/**
 * Create package.json
 * @param  {String} appName
 * @param  {String} overridesDir
 * @return {Promise}
 */
module.exports = ({ appName, overridesDir }) =>
  new Promise((resolve, reject) => {
    fs.readFile(path.join(overridesDir, 'package.json'), 'utf8', (error, data) => {
      if (error) {
        reject();
      }

      const packageJSON = {
        ...JSON.parse(data),
        name: appName,
      };

      fs.writeFile('package.json', JSON.stringify(packageJSON, null, 2), 'utf8', resolve);
    });
  });
