const prompt = require('prompt');
const changeCase = require('change-case');

module.exports = () =>
  new Promise((resolve, reject) => {
    const prompts = ['bucketName'];
    let appName = process.argv[2];

    if (!appName) {
      prompts.unshift('appName');
    }

    prompt.message = 'Please provide';
    prompt.start();
    prompt.get(prompts, (error, result) => {
      if (error) {
        return reject(new Error('Prompt error', error));
      }

      if (!appName && !result.appName) {
        return reject(new Error('appNameNotValid'));
      }

      if (!appName) {
        ({ appName } = result);
      }

      return resolve({
        ...result,
        appName: changeCase.paramCase(appName),
      });
    });
  });
