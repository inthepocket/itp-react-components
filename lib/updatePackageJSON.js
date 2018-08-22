const fs = require('fs');
const path = require('path');

/**
 * Create package.json
 * @param  {String} appDir
 * @return {Promise}
*/
module.exports = ({ appDir, updateJSON }) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path.join(appDir, 'package.json'), 'utf8', (error, data) => {
      if (error) {
        reject();
      }

      const packageJSON = JSON.parse(data);
      const nextPackageJSON = updateJSON(packageJSON);
      fs.writeFile(path.join(appDir, 'package.json'), JSON.stringify(nextPackageJSON, null, 2), 'utf8', resolve);
    });
  });
};
