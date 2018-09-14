const fs = require('fs');
const path = require('path');

/**
 * Update json
 * @param  {String} appDir
 * @return {Promise}
*/
module.exports = ({ file, updateJSON }) => new Promise((resolve, reject) => {
  fs.readFile(file, 'utf8', (error, data) => {
    if (error) {
      reject();
    }

    const packageJSON = JSON.parse(data);
    const nextPackageJSON = updateJSON(packageJSON);
    fs.writeFile(file, JSON.stringify(nextPackageJSON, null, 2), 'utf8', resolve);
  });
});
