const appendToFile = require('../appendToFile');
const shell = require('shelljs');
const fs = require('fs');

describe('When trying to append to a file', () => {
  const tempFolder = new Date().getTime();
  const testFile = `${tempFolder}.txt`;
  const expectedData = `this is a test\nwhatever`;
  beforeAll(done => {
    function createFile() {
      shell.exec(`echo "add some random text" >> ./${tempFolder}/${testFile}`, done);
    }
    shell.exec(`mkdir ${tempFolder}`, createFile);
  });
  afterAll(done => {
    shell.exec(`rm -rf ./${tempFolder}`, done);
  });

  it('should just be appended', async done => {
    const directory = `${process.cwd()}/${tempFolder}`;
    await appendToFile({ directory, fileName: testFile, data: expectedData });
    fs.readFile(`${directory}/${testFile}`, 'utf8', (err, data) => {
      console.log(data);
      expect(data).toContain(expectedData);
      done();
    });
  });
});
