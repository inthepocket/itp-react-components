const fs = require('fs');
const path = require('path');

/**
 * Create package.json
 * @param  {String} appName
 * @param  {String} templateDir
 * @return {Promise}
*/
module.exports = ({ appName, templateDir }) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path.join(templateDir, 'package.json'), 'utf8', (error, data) => {
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
};
