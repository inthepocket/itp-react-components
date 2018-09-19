#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const toCss = require('to-css');
const appRootJSON = require('../src/root.json');
const ddRootJSON = require('../design-docs/root.json');

const ROOT_CSS_APP_PATH = path.join('src', 'root.css');
const ROOT_CSS_DD_PATH = path.join('design-docs', 'catalog', 'static', 'root.css');

const writeFile = ({
  filePath,
  data,
}) => new Promise((resolve) => {
  fs.writeFile(filePath, data, 'utf8', resolve);
});

const mapRootCSS = (rootJSON) => toCss(Object.keys(rootJSON).reduce((rootCSS, property) => {
  return {
    ...rootCSS,
    ':root': {
      ...rootCSS[':root'],
      [`--${property}`]: rootJSON[property],
    },
  };
}, { ':root' : {} }));

const createRootCSS = async () => {
  const appRootCSS = mapRootCSS(appRootJSON);
  const ddRootCSS = mapRootCSS(ddRootJSON);

  await writeFile({
    filePath: ROOT_CSS_APP_PATH,
    data: appRootCSS,
  });

  await writeFile({
    filePath: ROOT_CSS_DD_PATH,
    data: ddRootCSS,
  });
};

createRootCSS();