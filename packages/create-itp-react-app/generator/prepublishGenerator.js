#!/usr/bin/env node
const path = require ('path');
const copyDir = require ('../lib/copyDir');
const logTitle = require ('../lib/logTitle');

const run = async () => {
  logTitle ('Copying app templates');
  const appTemplateDir = path.resolve (
    __dirname,
    '..',
    'templates',
    'design-docs'
  );
  const designDocsDir = path.resolve (__dirname, '../..', 'design-docs');

  await copyDir ({
    targetDir: appTemplateDir,
    srcDir: designDocsDir,
    options: {overwrite: true, filter: ['*', '!node_modules', '*/**', '!node_modules/**']},
  });
};

run ();
