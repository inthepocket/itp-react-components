#!/usr/bin/env node
const path = require('path');
const copyDirectory = require('../lib/copyDirectory');
const logTitle = require('../lib/logTitle');

const run = async () => {
  logTitle('Copying design-docs to templates');
  const appTemplateDir = path.resolve(__dirname, '..', 'templates', 'design-docs');
  const designDocsDir = path.resolve(__dirname, '../..', 'design-docs');

  await copyDirectory({
    targetDir: appTemplateDir,
    srcDir: designDocsDir,
    options: { overwrite: true, filter: ['*', '!node_modules', '*/**', '!node_modules/**'] },
  });
};

run();
