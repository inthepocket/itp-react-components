#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const changeCase = require('change-case');

const hubble_JSON_PATH = path.join('hubble.json');
const ROOT_JSON_APP_PATH = path.join('src', 'root.json');
const ROOT_JSON_DD_PATH = path.join('design-docs', 'root.json');

const sortObject = object =>
  Object.keys(object)
    .sort()
    .reduce((nextObject, key) => ({ ...nextObject, [key]: object[key] }), {});

const readJSON = ({
  filePath,
}) => new Promise((resolve, reject) => {
  fs.readFile(filePath, 'utf8', (error, data) => {
    if (error) {
      return reject(new Error(`File not found: ${filePath}`));
    }

    return resolve(JSON.parse(data));
  });
});

const writeFile = ({
  filePath,
  data,
}) => new Promise((resolve) => {
  fs.writeFile(filePath, data, 'utf8', resolve);
});

const writeJSON = ({
  filePath,
  jsonData,
}) => writeFile({ filePath, data: JSON.stringify(jsonData, null, 2) });

const mapRootJSON = ({
  hubbleJSON,
  rootJSON,
}) => new Promise((resolve, reject) => {
  try {
    hubbleJSON.colors.forEach(importedColor => {
      const colorVariableName = changeCase.camelCase(`color-${importedColor.id}`);
      rootJSON[colorVariableName] = `#${importedColor.hex}`;
    });

    return resolve(sortObject(rootJSON));
  } catch (error) {
    return reject(error);
  }
});

const getRootJSON = ({
  rootJSONPath,
  hubbleJSON,
}) => new Promise(async(resolve, reject) => {
  try {
    const rootJSON = await readJSON({ filePath: rootJSONPath });
    const jsonData = await mapRootJSON({
      hubbleJSON,
      rootJSON,
    });

    return resolve(jsonData);
  } catch (error) {
    return reject(error);
  }
});

const postProcess = async () => {
  try {
    const hubbleJSON = await readJSON({ filePath: hubble_JSON_PATH });

    const appRootJSON = await getRootJSON({
      rootJSONPath: ROOT_JSON_APP_PATH,
      hubbleJSON,
    });

    const ddRootJSON = await getRootJSON({
      rootJSONPath: ROOT_JSON_DD_PATH,
      hubbleJSON,
    });

    await writeJSON({
      filePath: ROOT_JSON_APP_PATH,
      jsonData: appRootJSON,
    });

    await writeJSON({
      filePath: ROOT_JSON_DD_PATH,
      jsonData: ddRootJSON,
    });
  } catch (error) {
    console.error(error.message);
    process.exit();
  }
};

postProcess();