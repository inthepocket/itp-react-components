const fs = require('fs')

/**
 * Append to file
 * @param  {String} directory
 * @param  {String} fileName
 * @param {String} data
 * @return {Promise}
 */
module.exports = ({directory, fileName, data}) =>
  new Promise(resolve => {
    fs.appendFile(`${directory}/${fileName}`, data, function(err) {
      if (err) throw err
      resolve()
    })
  })
