const path = require('path');

const logTitle = require('../../lib/logTitle');
const updateJSON = require('../../lib/updateJSON');
const copyDirectory = require('../../lib/copyDirectory');
const exec = require('../../lib/exec');
const appendToFile = require('../../lib/appendToFile');

module.exports = async ({ appName, appDir, docsTemplateDir }) => {
  // install design-docs
  logTitle('Installing design-docs');
  const designDocsName = `design-docs`;
  const targetDir = `${appDir}/${designDocsName}`;

  await copyDirectory({ targetDir, srcDir: docsTemplateDir });
  await exec(`cd ${targetDir} && npm i && cd ${process.cwd()}`);

  await updateJSON({
    file: path.join(appDir, designDocsName, 'package.json'),
    updateJSON: packageJSON => ({
      ...packageJSON,
      name: `${appName}-${designDocsName}`,
    }),
  });

  await appendToFile({
    directory: appDir,
    fileName: '.gitignore',
    data: `\n${designDocsName}/node_modules\n${designDocsName}/catalog/build`,
  });

  // update package.json
  logTitle('Updating package.json');
  await updateJSON({
    file: path.join(appDir, 'package.json'),
    updateJSON: packageJSON => ({
      ...packageJSON,
      author: 'In The Pocket',
      license: 'MIT',
      scripts: {
        ...packageJSON.scripts,
        'docs:start': `cd ${designDocsName} && npm run start`,
        'docs:build': `cd ${designDocsName} && npm i && npm run build`,
      },
    }),
  });
};
